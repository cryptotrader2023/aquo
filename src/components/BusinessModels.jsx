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
      id: '6akQEV3U9kI', // Video 4
      title: 'Synthetic Tokens',
    },
    {
      id: '8QC0EOLEXyo', // Video 5
      title: 'Securitization',
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
          <h2>Unlocking Innovative Business Models</h2>
          <p className="lead">
            At Aquo, we empower you with the creation of novel business models that were previously unexplored. Our innovative approach to asset tokenization opens doors to new investment opportunities, such as gradual homeownership, future share options, tokenization of unique assets, and global reach. These models enable you to capitalize on emerging trends, diversify your portfolio, and achieve your investment objectives in innovative ways.
          </p>
          <div className="text-center">
            <img src="/business.png" alt="Business" className="img-fluid" style={{ height: "400px" }} />
          </div>
          <p className="lead">
            Our platform serves as a catalyst for innovation and growth. By embracing the power of asset tokenization, you can explore gradual homeownership models, allowing you to gradually acquire ownership in real estate properties. This approach offers flexibility and affordability, making homeownership more accessible and manageable.
          </p>
          <p className="lead">
            Future share options provide you with the opportunity to invest in companies at a predetermined price in the future. This model allows you to participate in the growth potential of promising ventures without the immediate need for substantial capital. It opens doors to exciting investment prospects and potential high returns.
          </p>
          <p className="lead">
            The tokenization of unique assets revolutionizes investment possibilities. By converting assets such as artwork, collectibles, or intellectual property into digital tokens, you can access a global market of interested investors. This democratizes the ownership and trading of unique assets, unlocking liquidity and expanding your reach.
          </p>
          <p className="lead">
            With Aquo, you can seize global investment opportunities. Our platform enables you to invest in assets from around the world, providing diversification and exposure to international markets. Expand your investment horizons and capitalize on emerging trends across borders.
          </p>
          <p className="lead">
            Join us at Aquo as we empower you with innovative business models. Our platform offers the tools, resources, and global reach necessary to capitalize on emerging investment opportunities. Together, let's reshape the future of investments and unlock the potential of asset tokenization.
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

