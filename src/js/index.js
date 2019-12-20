$(function() {

  (function() {

    $('#banner .hands').addClass('active');

  })();



  //检测平台

  var system = {

    win: false,

    mac: false,

    xll: false

  };

  var p = navigator.platform;

  system.win = p.indexOf("Win") === 0;

  system.mac = p.indexOf("Mac") === 0;

  system.x11 = (p === "X11") || (p.indexOf("Linux") == 0);

  if (system.win || system.mac || system.xll) {

    //  pc端页面动画效果：


    // 导航点击样式：

    (function() {

      $('.main-nav li').each(function(index, nowobj) {

        $(nowobj).on('click', function() {

          $('.main-nav li').removeClass('active');

          $(this).addClass('active');

        });

      });

    })();

    // 导航楼层跳转：

    $(window).on('scroll', function() {

      var tops = $(window).scrollTop;

    });

    (function() {

      //  首页跳转：

      $.backtop(".nav-one");

      // 关于乐只：

      $('.main-nav li').eq(1).on('click', function() {

          var objs = {

            st: $(window).scrollTop()

          };

          $(objs).animate({

            st: parseInt($("#about").offset().top - 80)

          }, {

            speed: 1000,

            step: function() {

              $(window).scrollTop(objs.st);

            }

          })

        })
        // 专栏平台：
        // $('.main-nav li').eq(2).on('click', function() {
        //
        //   var objs = {
        //
        //     st: $(window).scrollTop()
        //
        //   }
        //
        //   $(objs).animate({
        //
        //     st: parseInt($("#business").offset().top - 90)
        //
        //   }, {
        //
        //     speed: 1000,
        //
        //     step: function() {
        //
        //       $(window).scrollTop(objs.st)
        //
        //     }
        //
        //   })
        //
        // })

      // 联系我们：

      $('.main-nav li').eq(2).on('click', function() {

        var objs = {

          st: $(window).scrollTop()

        }

        $(objs).animate({

          st: parseInt($("#contact").offset().top - 80)

        }, {

          speed: 1000,

          step: function() {

            $(window).scrollTop(objs.st)

          }

        })

      })

    })()




    // 三观动画：

    $(window).on('scroll', function() {

      var obj = $(document).scrollTop();

      if (obj >= ($("#about").offset().top - 300)) {

        $('#rby #rby-con li').addClass('active');

      } else {

        $('#rby #rby-con li').removeClass('active');

      };

    });

    //实时监测浏览器宽度来添加或移除导航点击事件：

    (function() {

      $(window).resize(

        function(){

          var h = $(window).width();

          if (h >= 1129) {

                $('#header .main-logo').off('click');

          } else {

            $('#header .main-logo').on('click', function() {

              $('.left-nav').toggleClass('active');

              var className = $('.left-nav').prop('className');

              if (className == 'left-nav active') {

                $("body").css('overflow', 'hidden')

              } else {

                $("body").css('overflow', 'auto')

              }

            });

          }


        }

      );

    })()





    //导航点击跳转：

    $(".left-nav li").eq(0).on('click', function() {

      $("body").css('overflow', 'auto');

      $('.left-nav').removeClass('active');

      $.backtop("#backs-top");
    })

    $(".left-nav li").eq(1).on('click', function() {

      $("body").css('overflow', 'auto');

      $('.left-nav').removeClass('active');

      var objs = {

        st: $(window).scrollTop()

      };

      $(objs).animate({

        st: parseInt($("#about").offset().top - 50)

      }, {

        speed: 1000,

        step: function() {

          $(window).scrollTop(objs.st);

        }

      })

    })


    // $(".left-nav li").eq(2).on('click', function() {
    //
    //   $("body").css('overflow', 'auto');
    //
    //   $('.left-nav').removeClass('active');
    //
    //   var objs = {
    //
    //     st: $(window).scrollTop()
    //
    //   }
    //
    //   $(objs).animate({
    //
    //     st: parseInt($("#business").offset().top - 60)
    //
    //   }, {
    //
    //     speed: 1000,
    //
    //     step: function() {
    //
    //       $(window).scrollTop(objs.st)
    //
    //     }
    //
    //   })
    //
    // })

    $(".left-nav li").eq(2).on('click', function() {

      $("body").css('overflow', 'auto');

      $('.left-nav').removeClass('active');

      var objs = {

        st: $(window).scrollTop()

      }

      $(objs).animate({

        st: parseInt($("#contact").offset().top - 50)

      }, {

        speed: 1000,

        step: function() {

          $(window).scrollTop(objs.st)

        }

      })

    })

  } else {

    //  移动端页面动画效果：





    //导航效果：

    $('#header .main-logo').on('click', function() {

      $('.left-nav').toggleClass('active');

      var className = $('.left-nav').prop('className');

      if (className == 'left-nav active') {

        $("body").css('overflow', 'hidden')

      } else {

        $("body").css('overflow', 'auto')

      }

    });


    $(".left-nav li").eq(0).on('click', function() {

      $("body").css('overflow', 'auto');

      $('.left-nav').removeClass('active');

      $.backtop("#backs-top");
    })

    $(".left-nav li").eq(1).on('click', function() {

      $("body").css('overflow', 'auto');

      $('.left-nav').removeClass('active');

      var objs = {

        st: $(window).scrollTop()

      };

      $(objs).animate({

        st: parseInt($("#about").offset().top - 50)

      }, {

        speed: 1000,

        step: function() {

          $(window).scrollTop(objs.st);

        }

      })

    })


    // $(".left-nav li").eq(2).on('click', function() {
    //
    //   $("body").css('overflow', 'auto');
    //
    //   $('.left-nav').removeClass('active');
    //
    //   var objs = {
    //
    //     st: $(window).scrollTop()
    //
    //   }
    //
    //   $(objs).animate({
    //
    //     st: parseInt($("#business").offset().top - 50)
    //
    //   }, {
    //
    //     speed: 1000,
    //
    //     step: function() {
    //
    //       $(window).scrollTop(objs.st)
    //
    //     }
    //
    //   })
    //
    // })

    $(".left-nav li").eq(2).on('click', function() {

      $("body").css('overflow', 'auto');

      $('.left-nav').removeClass('active');

      var objs = {

        st: $(window).scrollTop()

      }

      $(objs).animate({

        st: parseInt($("#contact").offset().top - 50)

      }, {

        speed: 1000,

        step: function() {

          $(window).scrollTop(objs.st)

        }

      })

    })




  };





});
