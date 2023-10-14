/*import React from 'react'
import Card from './Cards'

function Mostpop() {
  return (
    <div>
        <div class="container">
            <Card Title="Naruto: Shippuden" Image="https://img.flawlessfiles.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg"/>
            <Card Title="One Piece" Image="https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"/>
            <Card Title="Attack on Titan" Image="https://img.flawlessfiles.com/_r/300x400/100/83/da/83da53919d7a20332be01686141f18f6/83da53919d7a20332be01686141f18f6.jpg"/>
            <Card Title="Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc" Image="https://img.flawlessfiles.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png"/>
            <Card Title="Tokyo Revengers: Tenjiku-hen" Image="https://img.flawlessfiles.com/_r/300x400/100/02/1c/021ca452bd8b38c15f2e3c60e4a8c2ca/021ca452bd8b38c15f2e3c60e4a8c2ca.jpg"/>
            <Card Title="Jujutsu Kaisen" Image="https://img.flawlessfiles.com/_r/300x400/100/b5/1f/b51f863b05f30576cf9d85fa9b911bb5/b51f863b05f30576cf9d85fa9b911bb5.png"/>
        </div>
    </div>
  )
}

export default Mostpop*/


import React from 'react';
import "./Style.css";
const Mostpop = () => {
  return (
    <div className='aaa'>
    <div className="anime-trending-page">
      <h1>Most Popular Anime</h1>
      <div className="anime-list">
        <div className="anime-card">
          <img src="https://c4.wallpaperflare.com/wallpaper/605/871/805/uzumaki-naruto-hyuuga-hinata-uzumaki-boruto-sunset-wallpaper-preview.jpg" alt="Naruto" />
          <h2>Naruto</h2>
          <p>"Naruto" is a Japanese anime and manga series about Naruto Uzumaki, a young ninja aiming to become the Hokage and facing various challenges and adversaries, with themes of friendship and perseverance.</p>
        </div>
        <div className="anime-card">
          <img src="https://c4.wallpaperflare.com/wallpaper/953/956/989/anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-inosuke-hashibira-nezuko-kamado-hd-wallpaper-preview.jpg" alt="Demon Slayer" />
          <h2>Demon Slayer</h2>
          <p>"Demon Slayer" is a Japanese anime and manga series following Tanjiro Kamado, a young boy turned demon slayer, as he seeks to avenge his family and eradicate powerful demons in a stunningly animated, action-packed world.</p>
        </div>
        <div className="anime-card">
          <img src="https://wallpapercave.com/dwp2x/wp9748306.jpg" alt="One Piece" />
          <h2>One Piece</h2>
          <p>"One Piece" is a popular Japanese manga and anime series created by Eiichiro Oda, following the adventures of Monkey D. Luffy and his diverse crew as they search for the ultimate treasure, the One Piece, in a world filled with pirates, mythical creatures, and government intrigue.</p>
        </div>
       
        <div className="anime-card">
          <img src="https://images4.alphacoders.com/566/566163.jpg" alt="Hunter x Hunter" />
          <h2>Hunter x Hunter</h2>
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

export default Mostpop;