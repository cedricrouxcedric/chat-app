import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      name='Bessie Jacobs'
      avatar='http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-01/Untitled%20collage%20%282%29_8.jpg'
      online
      />
      <Contact
          name='Everett Sullivan'
          avatar='http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-01/Untitled%20collage%20%282%29_8.jpg'
          online
      />
      <Contact
          name='Beth Hernandez'
          avatar='http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-01/Untitled%20collage%20%282%29_8.jpg'
          offline
      />
    </div>
  );
}

export default App;
