### 使用
```
npm install
browserify src/index.js -o build/bundle.js -t [ babelify --presets [ es2015 react ] ]
```

参考：[redux中文文档](http://cn.redux.js.org/docs/basics/Reducers.html)    
----
总体下来代码差不多是一次跑通。对自己了解学习redux还是很多帮助的。   
不过文章中只给了源码，没给操作，特记下来步骤。
---

**原本是使用过webpack编译，不过最终文件的大小有点大，这次尝试browserify，目标文件还是挺大的。**
