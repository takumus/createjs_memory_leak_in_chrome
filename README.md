# createjs_memory_leak_in_chrome
demo : <http://takumus.com/demo/createjs_memory_leak_in_chrome/demo.html>  
Memory leak in chrome while canvas.style.display is none  
use chrome's task manager.  
  
クロームで、canvas.style.displayがnoneの時にメモリリークする  
クロームのタスクマネージャーで確認するとなります。

# workaround
Use canvas.style.visibility = "hidden".  
Stop stage.update(); while display is none  
  
canvas.style.visibility = "hidden"を使うか、  
stage.update()をdisplayがnoneの時に呼ばないようにする。
