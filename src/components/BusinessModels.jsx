import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

const BusinessModels = () => {

	        const videoOptions = {
  width: '100%',
  height: 'auto',
  controls: true,
};
  const [selectedVideo, setSelectedVideo] = useState('oQQBhzHPbzc'); // Default video ID

  const handleThumbnailClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const videoThumbnails = [
    {
      id: 'oQQBhzHPbzc', // Video 1
      title: 'Asset Tokenization',
    },
    {
      id: 'kd8c5CSqKkI', // Video 2
      title: 'Aquo Derivatives',
    },
    {
      id: 'SE1371YbFPI', // Video 3
      title: 'Tokenization and Derivatives',
    },
    {
      id: 'TK8T9aBrrCI', // Video 4
      title: 'Vision',
    },
    {
      id: 'jJA3AR-tmwE', // Video 5
      title: 'Security',
    },
    {
      id: 'GGNmCBBhFRQ', // Video 5
      title: 'About Us',
    },
  ];

  const [tooltipVisible, setTooltipVisible] = useState(null);

  const handleThumbnailMouseEnter = (index) => {
    setTooltipVisible(index);
  };

  const handleThumbnailMouseLeave = () => {
    setTooltipVisible(null);
  };

  return (
    <div className="container">
      <h1 className="text-center">Business Models</h1>
	  <div className="row">
        <div className="col-md-12">
	     <div className="text-center">
        <img src="/business.png" alt="Business Image" className="img-fluid" />
      </div>
      </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2>Listing Fees</h2>
          <p className="lead">
	    As investment proposals are listed on the Aquo marketplace there is a fee. 
          </p>
          <h2>Transaction Fees</h2>
          <p className="lead">
	    When transactions are performed, buying tokens, there is a fee.
          </p>
          <h2>Subscription Fee</h2>
          <p className="lead">
	    A subscription fee to be alerted for opportunities could apply.
          </p>
          <h2>Contract Fee</h2>
          <p className="lead">
	  A fee could apply to construct a smart contract from library functions.
          </p>
          <h2>Sponsorship Fee</h2>
          <p className="lead">
	  A fee could apply to premium listings on the platform.
          </p>
          <p className="lead">
	    The videos below show some of the core functionalities of the platform.
          </p>
          <div className="text-center">
            <div className="row justify-content-center">
              {videoThumbnails.map((video, index) => (
                <div
                  key={video.id}
                  className="col-2 col-md-1"
                  onMouseEnter={() => handleThumbnailMouseEnter(index)}
                  onMouseLeave={handleThumbnailMouseLeave}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                      alt="Thumbnail"
                      style={{ cursor: 'pointer', marginBottom: '10px' }}
                      onClick={() => handleThumbnailClick(video.id)}
                    />
                    {tooltipVisible === index && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-25px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          color: '#fff',
                          padding: '5px',
                          borderRadius: '5px',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {video.title}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
	            <div className="col-md-12 text-center">
<div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={`https://www.youtube.com/watch?v=${selectedVideo}`}
        width='100%'
        height='100%'
          controls={true}
      />
    </div>

              </div>

    </div>
    </div>
    </div>
    </div>
  );
};

export default BusinessModels;

