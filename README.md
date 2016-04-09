# Model-View-Intent Hello World

```
npm install
```


I had some trouble imagining how should i implement MVI  (http://staltz.com/unidirectional-user-interface-architectures.html )


Here's simple example, i use my own observable implementation which should be compatible with RxJS for the case (just rename sub -> subscribe, fromDOMEvent -> fromEvent)


What i struggled with was initializing it and actually connecting the MVI loop to DOM


How you solve is to create stream of events initialized with document-ready event and subscribe your view to a render function





