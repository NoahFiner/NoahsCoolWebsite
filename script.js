var getRandom = function () {
    r = Math.random();
    rand = Math.floor(r*100000);
    return rand;
}
var chars = "ABCDEFABCDEFABCDEF01234567890123456789";
var hex = "#";
var hexy = ['0', '0', '0', '0', '0', '0'];
var randHex = function () {
    for (var i = 0; i < 6; i++) {
        var randomthing = getRandom() % chars.length;
        hexy[i] = chars[randomthing];
    };
    hex = "#"+hexy[0]+""+hexy[1]+""+hexy[2]+""+hexy[3]+""+hexy[4]+""+hexy[5]+"";
    return hex;
};
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
var setHex = function(soHexy, switchHex) {
    if(switchHex) {
    hax3 = hax2;
    hax2 = hax1;
    hax1 = hax;
    hax = soHexy;
    };
    $('body').css('background-color', soHexy);
    $('#currentHex').html("<strong>"+soHexy.toUpperCase()+"</strong>");
};
/*var haxneg1 = "#000000";
var hax0 = "#000000";
*/
var hax = "#000000";
var hax1 = "#000000";
var hax2 = "#000000";
var hax3 = "#000000";
var back = function () {
    /*haxneg1 = hax0;
    hax0 = hax;
    */
    hax = hax1;
    hax1 = hax2;
    hax2 = hax3;
    setHex(hax, false);
};
/*
var forward = function () {
    haxneg1 = hax0;
    hax = hax0;
    hax1 = hax;
    hax2 = hax1;
    hax3 = hax2;
    setHex(hax);
};
*/
var randomHex = function() {
    /*
    haxneg1 = "#000000";
    hax0 = haxneg1;
    */
    setHex(randHex(), true);
};
var w = window.innerWidth;
var h = window.innerHeight;
var resetSources = function() {
    sources = ["sayings/awake.jpg", "sayings/answer.jpg", "sayings/beak.jpg", "sayings/bed.jpg", "sayings/bifocals.jpg", "sayings/bump.jpg", "sayings/burrito.jpg", "sayings/bushes.jpg", "sayings/cliff.jpg", "sayings/comfort.jpg", "sayings/crush.jpg", "sayings/cushion.jpg", "sayings/delivery.jpg", "sayings/dentistry.jpg", "sayings/dry.jpg", "sayings/duckface.jpg", "sayings/excercise.jpg", "sayings/exist.jpg", "sayings/fascinating.jpg", "sayings/fish.jpg", "sayings/food.jpg", "sayings/forgot.jpg", "sayings/hiding.jpg", "sayings/hole.jpg", "sayings/icecream.jpg", "sayings/imitation.jpg", "sayings/kissing.jpg", "sayings/klingon.jpg", "sayings/lake.jpg", "sayings/land.jpg", "sayings/makeup.jpg", "sayings/moved.jpg", "sayings/mud.jpg", "sayings/neck.jpg", "sayings/number.jpg", "sayings/ow.jpg", "sayings/party.jpg", "sayings/pillow.jpg", "sayings/pushups.jpg", "sayings/rainbow.jpg", "sayings/ride.jpg", "sayings/sand.jpg", "sayings/seaweed.jpg", "sayings/shoes.jpg", "sayings/shower.jpg", "sayings/smell.jpg", "sayings/soap.jpg", "sayings/tall.jpg", "sayings/teeth.jpg", "sayings/terrorizing.jpg", "sayings/til.jpg", "sayings/tissue.jpg", "sayings/traffic.jpg", "sayings/umbrella.jpg", "sayings/water.jpg", "sayings/whiskers.jpg", "sayings/zit.jpg", "sayings/zzzzzzzz.jpg"];
};
resetSources();
var start = function () {
    var c = 0;
    $(document).ready(function() {
                      $('.infolist').css('width', (w/3)+'px');
                      $('.info').css('width', (((w/3)*2)-50)+'px')
                      $('.infoselect').css('width', (((w/3)*2)-50)+'px')
                      var name = prompt("What's your name?");
                      $('.welcome').append("<p id='hello' class='fade'>Welcome, "+name+", to Noah's website!");
                      $('#li1').hover(function() {
                                      $('#info1').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info1').fadeTo('fast', 0);
                                      });
                      $('#li2').hover(function() {
                                      $('#info2').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info2').fadeTo('fast', 0);
                                      });
                      $('#li3').hover(function() {
                                      $('#info3').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info3').fadeTo('fast', 0);
                                      });
                      $('#li4').hover(function() {
                                      $('#info4').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info4').fadeTo('fast', 0);
                                      });
                      $('#li5').hover(function() {
                                      $('#info5').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info5').fadeTo('fast', 0);
                                      });
                      $('#li6').hover(function() {
                                      $('#info6').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info6').fadeTo('fast', 0);
                                      });
                      $('#li7').hover(function() {
                                      $('#info7').fadeTo('slow', 1);
                                      },
                                      function() {
                                      $('#info7').fadeTo('fast', 0);
                                      });
                      });
};
var randBack = function () {
    var hex = randHex();    $('body').css('background-color', hex);
    $('div').css('background-color', hex);
    var hex1 = hex.replaceAt(3, 'F');
    $('#header').css('background-color', hex1);
};
    $(document).ready(function () {
                      imgheight = $('.slides').height();
                      imgwidth = $('.slides').width();
                      $('.slides').width(imgwidth/2);
                      $('.slides').height(imgheight/2);
                      $('#slideback').width(imgwidth/2);
                      $('#slideback').height(imgheight/2);
            $('#defaultdiv').animate({height: "-=100px"});
            $('#customHexDiv').animate({height: "-=190px"});
              $('#optionsdiv').hover(function () {
                                     areOptionsOpen = 'yah';
                                     $(this).animate({height: "+=350px"}, 'slow');
                                     $(this).fadeTo('slow', 1);
                                     $('.options').fadeTo('fast', 1);
                                     },function () {
                                     areOptionsOpen = 'naw';
                                     $(this).fadeTo('fast', 0.25);
                                     $('.options').fadeTo('fast', 0);
                                     $(this).animate({height: "-=350px"}, 'slow');
                                     });
            $('.fade').mouseenter(function() {
                                  $(this).fadeTo('fast', 1);
                                  });
            $('.fade').mouseleave(function() {
                                  $(this).fadeTo('fast', 0.5);
                                  });
            $('a').mouseenter(function() {
                              $(this).fadeTo('fast', 1);
                              });
            $('a').mouseleave(function() {
                              $(this).fadeTo('fast', 0.5);
                              });
            $('.infoselect').mouseenter(function() {
                                        $(this).fadeTo('fast', 0.15);
                                        });
            $('.infoselect').mouseleave(function() {
                                        $(this).fadeTo('fast', 0.1);
                                        });
            $('#header').mouseenter(function() {
                                    $(this).fadeTo('slow', 1);
                                    });
            $('#header').mouseleave(function() {
                                    $(this).fadeTo('slow', 0.75);
                                    });
            $('.floatingstuff').mouseenter(function() {
                                         $(this).fadeTo('fast', 0.5);
                                         $(correcttext).fadeTo('fast', 1);
                                         });
            $('.floatingstuff').mouseleave(function() {
                                         $(this).fadeTo('fast', 0.25);
                                         $(correcttext).fadeTo('fast', 0.5);
                                         });
            $('.answerbox').mouseenter(function() {
                                     $(this).fadeTo('fast', 0.75);
                                     $('.feedback').fadeTo('fast', 1)
                                     });
            $('.answerbox').mouseleave(function() {
                                     $(this).fadeTo('fast', 0.25);
                                     $('.feedback').fadeTo('fast', 0.5);
                                     });
            $('#click4score').mouseenter(function() {
                                       $(this).fadeTo('fast', 1);
                                       $(this).animate({right: '+=20px'});
                                       $('#noahscore').html("<strong>Noah score: "+correctNum*100+"</strong>");
                                       $('#noahscore').fadeTo('slow', 1);
                                       });
            $('#click4score').mouseleave(function() {
                                       $(this).fadeTo('fast', 0.5);
                                       $(this).animate({right: '-=20px'});
                                       $('#noahscore').fadeTo('slow', 0);
                                       });
            $('#celebrate').hover(function() {
                                location.assign('http://heeeeeeeey.com/')
                                                    });
            $('.defaults').css('opacity', 0);
            $('#defaultdiv').css('opacity', 0);
            $('#newHex').mouseenter(function () {
                                    randomHex(100);
                                    $('#pointing').remove();
                                    $('.defaults').fadeTo('slow', 0.5);
                                    $('#defaultdiv').fadeTo('slow', 0.05);
                                              });
          $('#defaultdiv').mouseenter(function () {
                                 $('#defaultdiv').animate({height: "+=250px"});
                                 $('#defaultdiv').fadeTo('slow', 1);
                                 $('.defaults').fadeTo('fast', 1);
                                 $('.defdivs').fadeTo('fast', 0.5).delay(500);
                                      });
        $('#defaultdiv').mouseleave(function () {
                                 $('#defaultdiv').fadeTo('slow', 0.05);
                                 $('.defaults').fadeTo('fast', 0.5);
                                 $('.defdivs').fadeTo('fast', 0.25);
                                 $('#defaultdiv').animate({height: "-=250px"});
                                 });
      $('#customHexDiv').mouseenter(function () {
                                  $('#customHexDiv').animate({height: "+=100px"});
                                  $('#customHexDiv').fadeTo('slow', 1);
                                  $('.custdivs').fadeTo('fast', 1).delay(500);
                                  });
      $('#customHexDiv').mouseleave(function () {
                                  $('#customHexDiv').fadeTo('slow', 0.05);
                                  $('.custdivs').fadeTo('fast', 0);
                                  $('#customHexDiv').animate({height: "-=100px"});
                                  });
                      $('.defdivs').hover(function () {
                                          $(this).fadeTo('fast', 1);
                                          },
                                          function () {
                                          $(this).fadeTo('fast', 0.5);
                                          });
                      /*I let my friend name this variable in exchange for food.*/var ultrapoop = function () {
                            setHex(randHex(), false)
                      
                      };
                      $('#newPARTY').hover(function () {
                                           $('#newPARTYText').html("Reload the page to stop partying.");
                                           $('#newPARTYText').css('font-size', '20px');
                                           $('#newPARTYText').animate({color:"FF0000"}, 3000);
                                           var supercolorchange = setInterval(function () {ultrapoop()}, 10);
                                           },
                                           function () {
                                           clearInterval(supercolorchange);
                                           });
              $('#reddy').mouseenter(function () {
                                     setHex('#FF0000');
                                     });
                      $('#greeny').mouseenter(function () {
                                              setHex('#00FF00');
                                              });
                      $('#yellowy').mouseenter(function () {
                                               setHex('#FFFF00');
                                               });
                      $('#bluey').mouseenter(function () {
                                             setHex('#0000FF');
                                             });
                      $('#orangey').mouseenter(function () {
                                               setHex('#FF6600');
                                               });
                      $('#purply').mouseenter(function () {
                                              setHex('#FF00FF');
                                              });
                      $("#back").hover(function () {
                                       $('#back').fadeTo('fast', 0.5);
                                       back();
                                       },
                                       function () {
                                       $('#back').fadeTo('fast', 0.2);
                                       });
            $('#button1').click(function () {
                      setHex($('input[name=customhex]').val())
                                          });
                      $('#button2').click(function() {
                                          setHex($('input[name=customcolor]').val()); });
      $('#musictoggle').click(function () {
                              alert("The music here is copyrighted, so I removed it for GitHub. But trust me, I know how to use audio tags. :)");
                              });
                      });
var answer = function(a, yah, no) {
    $('.feedback1').fadeOut('slow');
    if(a === 1) {
        a = $('input[name=question1]').val();
        $a1 = $('#a1');
    };
    if(a === 2) {
        a = $('input[name=question2]').val();
        $a1 = $('#a2');
    };
    if(a === 3) {
        a = $('input[name=question3]').val();
        $a1 = $('#a3');
    }
    if(a === 4) {
        a = $('input[name=question4]').val();
        $a1 = $('#a4');
    }
    if(a === 5) {
        a = $('input[name=question5]').val();
        $a1 = $('#a5');
    }
    switch(a) {
        case yah:
            $a1.append("<p class='feedback1' id='right'>That is the correct answer!</p>");
            correctNum += 1;
            break;
        case no:
            $a1.append("<p class='feedback1' id='wrong'>You are a horrible person!</p>");
            correctNum -= 1;
            break;
        default:
            $a1.append("<p class='feedback1' id='wtf'>Idk what that means lol.</p>");
            break;
    };
    $('#correcttext').html("Questions correct: <strong>"+correctNum+"</strong>")
};
