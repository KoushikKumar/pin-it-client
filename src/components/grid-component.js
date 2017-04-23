import React, { Component } from "react";
import StackGrid, { transitions } from "react-stack-grid";

export default class MyComponent extends Component {
  render() {
    return (
      <StackGrid
        columnWidth={"25%"}
        gutterWidth={5}
        gutterHeight={5}
        duration={1000}
        appearDelay={100}
        monitorImagesLoaded={true}
        vendorPrefix={true}
      >
        <div key="key1"><img className="pinit-pic1" src="https://s-media-cache-ak0.pinimg.com/736x/71/33/8b/71338baa50f57500b902e3b64a5a0192.jpg" /></div>
        <div key="key2"><img className="pinit-pic1" src="http://science-all.com/images/images/images-13.jpg" /></div>
        <div key="key4"><img className="pinit-pic1" src="http://science-all.com/images/images/images-16.jpg" /></div>
        <div key="key5"><img className="pinit-pic1" src="https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg" /></div>
        <div key="key6"><img className="pinit-pic1" src="https://i.ytimg.com/vi/_tQu4OMlYso/maxresdefault.jpg" /></div>
        <div key="key7"><img className="pinit-pic1" src="http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg" /></div>
        <div key="key8"><img className="pinit-pic1" src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia20645_main.jpg?itok=dLn7SngD" /></div>
        <div key="key9"><img className="pinit-pic1" src="https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg" /></div>
        <div key="key10"><img className="pinit-pic1" src="https://s-media-cache-ak0.pinimg.com/736x/71/33/8b/71338baa50f57500b902e3b64a5a0192.jpg" /></div>
        <div key="key20"><img className="pinit-pic1" src="http://science-all.com/images/images/images-13.jpg" /></div>
        <div key="key40"><img className="pinit-pic1" src="http://science-all.com/images/images/images-16.jpg" /></div>
        <div key="key50"><img className="pinit-pic1" src="https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg" /></div>
        <div key="key60"><img className="pinit-pic1" src="https://i.ytimg.com/vi/_tQu4OMlYso/maxresdefault.jpg" /></div>
        <div key="key70"><img className="pinit-pic1" src="http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg" /></div>
        <div key="key80"><img className="pinit-pic1" src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia20645_main.jpg?itok=dLn7SngD" /></div>
        <div key="key90"><img className="pinit-pic1" src="https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg" /></div>
        <div key="key11"><img className="pinit-pic1" src="https://s-media-cache-ak0.pinimg.com/736x/71/33/8b/71338baa50f57500b902e3b64a5a0192.jpg" /></div>
        <div key="key21"><img className="pinit-pic1" src="http://science-all.com/images/images/images-13.jpg" /></div>
        <div key="key42"><img className="pinit-pic1" src="http://science-all.com/images/images/images-16.jpg" /></div>
        <div key="key52"><img className="pinit-pic1" src="https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg" /></div>
        <div key="key62"><img className="pinit-pic1" src="https://i.ytimg.com/vi/_tQu4OMlYso/maxresdefault.jpg" /></div>
        <div key="key37"><img className="pinit-pic1" src="http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg" /></div>
        <div key="key84"><img className="pinit-pic1" src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia20645_main.jpg?itok=dLn7SngD" /></div>
        <div key="key95"><img className="pinit-pic1" src="https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg" /></div>
        <div key="key103"><img className="pinit-pic1" src="https://s-media-cache-ak0.pinimg.com/736x/71/33/8b/71338baa50f57500b902e3b64a5a0192.jpg" /></div>
        <div key="key203"><img className="pinit-pic1" src="http://science-all.com/images/images/images-13.jpg" /></div>
        <div key="key403"><img className="pinit-pic1" src="http://science-all.com/images/images/images-16.jpg" /></div>
        <div key="key503"><img className="pinit-pic1" src="https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg" /></div>
        <div key="key603"><img className="pinit-pic1" src="https://i.ytimg.com/vi/_tQu4OMlYso/maxresdefault.jpg" /></div>
        <div key="key703"><img className="pinit-pic1" src="http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg" /></div>
        <div key="key803"><img className="pinit-pic1" src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia20645_main.jpg?itok=dLn7SngD" /></div>
        <div key="key903"><img className="pinit-pic1" src="https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg" /></div>
         </StackGrid>
    );
  }
}