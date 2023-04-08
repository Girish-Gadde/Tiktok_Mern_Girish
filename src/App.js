import React from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app_videos'>
          <Video
              url='https://player.vimeo.com/external/431438996.sd.mp4?s=8bd2ddfd7e686e705eb0778633934ae06d8e53a6&profile_id=164&oauth2_token_id=57447761'
              channel="Enzo"
              description='Macbook Air to new windows editing beast'
              song="I am a windows pc"
              likes={239}
              shares={345}
              messages={890}
          />
          <Video
              url='https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4'
              channel='Dexter'
              description="cat walking "
              song='pretty cat'
              likes={250}
              shares={233}
              messages={58}

          />
      </div>  
    </div>
  );
}

export default App;
