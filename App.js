import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='left'>
          <div className='profile'>
            <div className='img'>
              <img className='profile_pic' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' width='60px' style={{borderRadius:40}} alt='profilepic'/>
            </div>
            <div className='txt'>
              <h3 style={{paddingLeft:'5px'}}>
                Alex
                <span>Senior</span>
              </h3>    
            </div>
          </div>
          <div className='friendlist'>
              Friend1s
          </div>
        </div>
        <div className='middle'>
            Me
        </div>
        <div className='right'>
            Bro
        </div>
      </div>
    </div>
  );
}

export default App;
