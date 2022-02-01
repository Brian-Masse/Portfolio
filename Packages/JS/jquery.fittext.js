(function( $ ){

    $.fn.fitText = function( kompressor, optionsX, optionsY ) {
  
      // Setup options
      var compressor = kompressor || 1,
          settingsX = $.extend({
            'minFontSize' : Number.NEGATIVE_INFINITY,
            'maxFontSize' : Number.POSITIVE_INFINITY
          }, optionsX),
          settingsY = $.extend({
            'minFontSize' : Number.NEGATIVE_INFINITY,
            'maxFontSize' : Number.POSITIVE_INFINITY
          }, optionsY);
  
      return this.each(function(){
  
        // Store the object
        var $this = $(this);
  
        // Resizer() resizes items based on the object width divided by the compressor * 10
        var resizer = function () {
            let fontSizeWidth = Math.max(Math.min($this.width() * (1/3.5), parseFloat(settingsX.maxFontSize)), parseFloat(settingsX.minFontSize))
            let fontSizeHeight = Math.max(Math.min($this.height() * (2/3), parseFloat(settingsY.maxFontSize)), parseFloat(settingsY.minFontSize))
            // $this.css('font-size', Math.min(fontSizeWidth, fontSizeHeight))
            $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settingsX.maxFontSize)), parseFloat(settingsX.minFontSize)))
        };
  
        // Call once to set.
        resizer();
  
        // Call on resize. Opera debounces their resize by default.
        $(window).on('resize.fittext orientationchange.fittext', resizer);
  
      });
  
    };
  
  })( jQuery );