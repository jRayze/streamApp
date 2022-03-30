import React from 'react';
//import { useState } from 'react';

const decodeHTMLEntities = (text) => {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}

const datePub = (datePub) => {
    const current = new Date().getTime() / 1000;
    console.log(current)
    const pub = new Date(datePub).getTime() / 1000;
    console.log(pub)
    let res = parseInt(current - pub)
    if (res < 60) {
        return 'il y a '+ Math.trunc(res) + ' secondes';
    }
    else if (res < 3600) {
        return 'il y a '+ Math.trunc(res / 60) + ' minutes';
    }
    else if (res < 86400) {
        return 'il y a '+ Math.trunc(res / 3600) + ' hours';
    }
    else if (res < 604800) {
        return 'il y a '+ Math.trunc(res / 86400) + ' jours';
    }
    else if (res < 2629800) {
        return 'il y a '+ Math.trunc(res / 604800) + ' semaines';
    }
    else if (res < 31557600) {
        return 'il y a '+ Math.trunc(res / 2629800) + ' mois';
    }
    else {
        return 'il y a '+ Math.trunc(res / 31557600) + ' ans';
    }
}

const Video = ({dataVideo}) => {
    //const [timeReach, setTimeReach] = useState(0);

    const dataUrl = dataVideo.snippet.thumbnails.medium.url;
    const videoUrl= "https://www.youtube.com/watch?v="+dataVideo.id.videoId;

    console.log(dataVideo);
    return (
        <div className='xxlargeFormat xlargeFormat largeFormat mediumFormat smallFormat xsmallFormat card cards'>
            <img src={dataUrl} alt={dataVideo.snippet.title} />
            <h3 style={{marginTop: "12px", height: "44px"}}>
                <a href={videoUrl} className='videoLink'>
                    <p className='videoTitle'>{ decodeHTMLEntities(dataVideo.snippet.title)}</p>
                </a>
            </h3>
            <div className='infosVideo'>
                <p className='channelName'>
                    {dataVideo.snippet.channelTitle}
                </p>
                <span className='vues'>{" vues • " + datePub(dataVideo.snippet.publishedAt)}</span>
            </div>

        </div>
    );
};

export default Video;