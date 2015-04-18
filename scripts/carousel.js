(function ($) {
  var index = 0,
      bannerContainer = $('#carousel div.wrap'),
      total = $('ol#slides li').length,
      bannerListItems = bannerContainer.find('ol#slides li'),
      numberOfBanners = bannerListItems.length,
      banners = bannerContainer.find('ol#slides li'),
      previousIndex = 0;
      
  if (total > 1) {
  
    bannerContainer.append('<a href="#" class="carousel-button next" title="Next slide"></a>');
    bannerContainer.append('<a href="#" class="carousel-button previous" title="Previous slide"></a>');
    
    var forwards = bannerContainer.find('.next'),
        backwards = bannerContainer.find('.previous');

    reset = function () {
      banners.hide();
      index = 0;
      $(banners.get(index)).show();
    }

    fadeToIndex = function (from, to) {    
      $(banners.get(from)).fadeOut(1000);
      $(banners.get(to)).fadeIn(3000);
    }
  
    fadeForwards = function () {
      if (index == (numberOfBanners - 1)) {
        previousIndex = index;
        index = 0;
        fadeToIndex(previousIndex, index);
        return false;
      }
      if (index < numberOfBanners) {
        previousIndex = index;
        index++;
        fadeToIndex(previousIndex, index);
      }
      return false;
    }
  
    fadeBackwards = function () {
      if (index == 0) {
        previousIndex = index;
        index = (numberOfBanners - 1);
        fadeToIndex(previousIndex, index);
        return false;
      }
      if (index > 0) {
        previousIndex = index;
        index--;
        fadeToIndex(previousIndex, index);
      }
      return false;
    }
    forwards.click(function () {
      fadeForwards();
      return false;
    });
    backwards.click(function () {
      fadeBackwards();
      return false;
    });
  }
  reset();
})(jQuery);