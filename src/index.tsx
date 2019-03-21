import React from 'react';
import ReactDOM from 'react-dom';
import './polyfill'; // 引入兼容文件
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
* react 组件被实例化时，依次调用以下方法
*
* 1.getDefaultProps 获取组件传参参数；
* 2.getInitialState 初始化状态；
* 3.componentWillMount 组件将要创建；
* 4.render 调用render方法；
* 5.componentDidMount 组件完成创建；
*
* */

/*
* 组件存在时，更新调用的钩子函数
*
* 1.componentWillReceiveProps 组件的props可以通过父组件更改，此时会调用该方法；
* 2.shouldComponentUpdate 可以在该方法里返回false阻止后续渲染；
* 3.componentWillUpdate 组件将要更新；
* 4.render 调用render方法；
* 5.componentDidUpdate 组件完成更新；
*
* */

/*
* react 销毁时调用的钩子函数
*
* componentWillUnmount 组件销毁前触发
* */

/*
* react 新生命周期
*
* static getDerivedStateFromProps(nextProps, prevState): newState
* 组件每次被rerender的时候，包括在组件构建之后(render之前最后执行)，
* 每次获取新的props或state之后。在v16.3版本时，组件state的更新不会触发该生命周期。
* 返回值用于更新state，返回null代表不更新
*
*
* getSnapshotBeforeUpdate(prevProps, prevState)
* 触发时间: update发生的时候，在render之后，在组件dom渲染之前。
* 返回值作为componentDidUpdate的第三个参数
* */
