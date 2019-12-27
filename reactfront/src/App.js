import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      title: '',
      content: '',
      results: [],
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  async getPosts() {
    // 비동기 때문에 그냥 넘어가 버림 따라서 async해줘야 한다.
    let jsons = await api.getAllPosts()
    this.setState({results:jsons.data})
    console.log(jsons.data)
  }

  handlingChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handlingSubmit = async (e) => {
    // 어떤 이벤트가 가지는 디폴트 기능을 막는 것이다.
    // 서브밋하면 새로고침이 디폴트이기 때문에 이를 해주는 것이 좋다.
    e.preventDefault()
    let result = await api.createPost({title: this.state.title, content: this.state.content})
    console.log(result)
    this.setState({title: '', content: ''})
    this.getPosts()
  }

  // 리액트 꾸미기에서의 버튼을 사용했더니 벨류를 못잡아서 직접넣어준다.

  handlingClick = async (id) => {
    await api.deletePost(id)
    this.getPosts()
  }

  render(){
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Paper className="PostingPaper">
          <div className="PostingSection">
            <h2>kma 대나무 숲</h2>
            <form className="PostingForm" onSubmit={this.handlingSubmit}>

              <TextField
                id="outlined-name"
                label="title"
                name="title"
                // className={classes.textField}
                value={this.state.title}
                onChange={this.handlingChange}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-multiline-static"
                label="content"
                name="content"
                // className={classes.textField}
                multiline
                rows="4"
                value={this.state.content}
                onChange={this.handlingChange}
                margin="normal"
                variant="outlined"
              />    
              <Button variant="outlined" color="primary" type='submit'>
                당나귀 귀!
              </Button>
            </form>
          </div>
        </Paper>
        <div className="ViewSection">
          {
            this.state.results.map((post)=>
              <Card className={'card'}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <PostView key={post.id} title={post.title} content={post.content}/>
                  </Typography>
                </CardContent>
                <CardActions>
                {/* 인터렉티브함을 위해 이곳에서 삭제하겠다. 벨류 못잡아서 직접주입 */}
                  <Button onClick={(e) => this.handlingClick(post.id)} variant="outlined" color="secondary" size="small" type='submit'>소멸</Button>
                </CardActions>
              </Card>
            )
          }     
        </div>
      </Container>
    </div>
  )
}
}

export default App;
