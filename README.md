# createjs_memory_leak_in_chrome
Memory leak in chrome while canvas.style.display is none  
クロームで、canvas.style.displayがnoneの時にメモリリークする  

# workaround
Use canvas.style.visibility = "hidden".  
Stop stage.update(); while display is none  
  
canvas.style.visibility = "hidden"を使うか、  
stage.update()をdisplayがnoneの時に呼ばないようにする。
