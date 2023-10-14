/*import React from 'react'
import './Style.css'
import Card from './Cards'


function Movies1() {
  return (
    <div>
        <div class="container">
            <Card Title="Suzumes Door-Locking" Image="https://img.flawlessfiles.com/_r/300x400/100/88/d7/88d7186ebed8856c731b2dd132aaf68a/88d7186ebed8856c731b2dd132aaf68a.jpg" />
            <Card Title="Your Name" Image="https://img.flawlessfiles.com/_r/300x400/100/16/ee/16eec56baf8f3fcc6430607f58ce3d12/16eec56baf8f3fcc6430607f58ce3d12.jpg"/>
            <Card Title="A Silent Voice" Image="https://img.flawlessfiles.com/_r/300x400/100/7f/c6/7fc61d82b89949dff4319bd73ff2d456/7fc61d82b89949dff4319bd73ff2d456.jpg"/>
            <Card Title="The Summer" Image="https://img.flawlessfiles.com/_r/300x400/100/48/a7/48a7a381cfe141c285adc6cab7f64331/48a7a381cfe141c285adc6cab7f64331.jpg"/>
            <Card Title="To Every You I've Loved Before" Image="https://img.flawlessfiles.com/_r/300x400/100/36/7a/367ad0995e8b6291efdc190dec85166e/367ad0995e8b6291efdc190dec85166e.jpg"/>
            <Card Title="I Am What I Am" Image="https://img.flawlessfiles.com/_r/300x400/100/1c/af/1caf6775f27fd0cd8c0b7957bee4d0c5/1caf6775f27fd0cd8c0b7957bee4d0c5.jpg"/>
        </div>
    </div>           
  )
}
export default Movies1*/

import React from 'react';
import "./Style.css";
const Movies1 = () => {
  return (
    <div className='aaa'>
    <div className="anime-trending-page">
      <h1>Movie Anime</h1>
      <div className="anime-list">
        <div className="anime-card">
          <img src="https://www.hindustantimes.com/ht-img/img/2023/04/21/1600x900/maxresdefault_1682057844226_1682057853799.jpg" alt="Naruto" />
          <h2>Suzumes Door-Locking</h2>
          <p>"Naruto" is a Japanese anime and manga series about Naruto Uzumaki, a young ninja aiming to become the Hokage and facing various challenges and adversaries, with themes of friendship and perseverance.</p>
        </div>
        <div className="anime-card">
          <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b7d5c3e0703e59c63c5fd06f86396f8d.jpe" alt="Demon Slayer" />
          <h2>Your Name</h2>
          <p>"Demon Slayer" is a Japanese anime and manga series following Tanjiro Kamado, a young boy turned demon slayer, as he seeks to avenge his family and eradicate powerful demons in a stunningly animated, action-packed world.</p>
        </div>
        <div className="anime-card">
          <img src="https://assets-prd.ignimgs.com/2021/07/27/re-main-1627425358521.jpeg" alt="One Piece" />
          <h2>The Summer</h2>
          <p>"One Piece" is a popular Japanese manga and anime series created by Eiichiro Oda, following the adventures of Monkey D. Luffy and his diverse crew as they search for the ultimate treasure, the One Piece, in a world filled with pirates, mythical creatures, and government intrigue.</p>
        </div>
       
        <div className="anime-card">
          <img src="https://i.ytimg.com/vi/ZbRtXDu6tEY/maxresdefault.jpg" alt="Hunter x Hunter" />
          <h2>A Silent Voice</h2>
         <p>"Hunter x Hunter" is an anime and manga series that follows Gon Freecss, a young boy who aspires to become a Hunter and find his missing father while embarking on thrilling adventures in a world filled with unique challenges, creatures, and Nen, a mysterious power system.</p>
        </div>
        <div className="anime-card">
          <img src="https://wallpapercave.com/dwp2x/wp1837539.jpg" alt="Attack on Titans" />
          <h2>Attack on Titans</h2>
          <p>"Attack on Titan" is a popular anime and manga series set in a world where humanity must defend itself from giant humanoid creatures while uncovering dark secrets about their existence. It follows Eren Yeager and his friends as they join the fight against these Titans to reclaim their world.</p>
        </div>
        <div className="anime-card">
          <img src="http://m.gettywallpapers.com/wp-content/uploads/2021/09/Tokyo-Revengers-Wallpaper-Pictures-4k.jpg" alt="Tokyo Revengers" />
          <h2>Tokyo Revengers</h2>
          <p>"Tokyo Revengers" is an anime series that follows Takemichi Hanagaki, a man who discovers he can time-travel and uses this ability to change the past and prevent a tragic future involving gang conflicts and lost loved ones.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Movies1;