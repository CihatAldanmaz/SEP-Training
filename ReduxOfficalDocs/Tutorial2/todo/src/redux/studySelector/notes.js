// https://juejin.im/post/6844903828895055885

// selector是我们编写的一个小函数,接受整个Redux的state,并从中返回挑选出的值.

// 你知道mapStateToProps是如何工作的吗?了解它是如何接受整个state,筛选出值得吗?如果你了解话, Selector基本上做着同样的工作,附带的好处是,selector还同时通过缓存不变的state提升了性能.的确如此,Selector可以改善性能.


// Redux为我们提供了一个store,你可以放置state,在稍大型的app中,state通常是一个对象,这个对象的每个键都管理着一个独立的reducer.[^译注:如果你现在还不知道reducer是什么,就不要再往下看了, 需要学习Redux的基础知识]
// 假设我们的state对象结构如下:

// {
//     currentUser: {
//       token,
//       userId,
//       username
//     },
//     shoppingCart: {
//       itemIds,
//       loading,
//       error
//     },
//     products: {
//       itemsById,
//       loading,
//       error
//     }
//   }

// 在这个虚构的实例中,保存了登录用户的信息,shop中的货物,以及用户购物车中的商品.
// 这里的数据是经过范式化(normalized)的,所以购物车中的商品看到的只是指向实体货物的ID.
// 当一个用户在购物车中添加一件商品,商品本身并没有被复制的购物车中-只有商品的ID添加到 shoppongCart.itemIds数组中.
  

// ------------------------------------首先看看没有使用selector的情况------------------------------------
// 在需要从Redux的state提取数据并注入到React组件的时候, 
// 我们需要编写一个mapStateToProps函数,用于接受整个state,并选择出组件需要的部分.

// 🔥🔥🔥🔥🔥🔥🔥🔥要做的事情：假设你需要展示用户购物车中的商品列表.因此需要items🔥🔥🔥🔥🔥🔥🔥🔥

// 但是,shoppingCart中并没有items这一项.只有items们的IDs. 
// 你需要用每个ID在products.items数组中查找出对应的商品信息. 下面是具体的执行方法:

// function mapStateToProps(state){
//     return {
//         items: state.shoppingCart.itemIds.map(id => 
//             state.products.itemsById[id]    
//         )
//     }
// }


// ------------------------------------修改了State的结构,mapStateToProps就没办法正常工作了------------------------------------
// 现在假设你(或者是开发组中的其他人)突发奇想, shoppingCart应该是currentUser的一个属性而不是独立的属性.那么现在的State结构变成下面的样子:
// {
//     currentUser: {
//       token,
//       userId,
//       username,
//       shoppingCart: {
//         itemIds,//<<<<<<<<
//         loading,
//         error
//       },
//     },
//     products: {
//       itemsById,//<<<<<<<<<
//       loading,
//       error
//     }
//   }
// 看看你干的好事,之前定义好的mapStateToProps函数就毁了. 原来指向state.shoppingCart,现在指向了state.currentUser.shoppingCart.
// 如果在代码中有一大堆的代码都引用了state.shoppongCart,那可有的改了.在你意识到完全有必要对state重新组织的时候,这个更新过程会阻碍你完成任务.
// 如果我们只有唯一的途径把所有的state集中管理, 还有一些函数,调用时可以找到我们需要的数据...
// 是的,这正是selector所做的工作:)


// ------------------------------------重构:编写一个简单的selector------------------------------------
// 来重新编写一下被破坏掉的mapStateToProps, 把state的筛选放在selector中完成.
// // 这个函数放在全局作用于内
// // 例如命名为 selectors.js,
// // 在需要访问这一部分state的时候导入这个函数就可以了
// function selectShoppingCartItems(state) {
//     return state.currentUser.shoppingCart.itemIds.map( id =>
//         state.products.itemsById[id]
//     );
// }
// function mapStateToProps(state) {
//     return {
//         items: selectShoppingCartItems(state)
//     }
// }

// 下一次,如果state的组织结构发生变化, 你只需要更新一个selector函数就完成了所有的工作.超级简单.
// 说到命名,selector函数的的常见前缀是select或者get.当然遵循你app中其他的传统定义也完全可以.