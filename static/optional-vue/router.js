const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')


,
    //确认订单页
    {
      path: '/confirmOrder',
      component: confirmOrder,
      children: [{
          path: 'remark', //订单备注
          component: remark,
      }, {
          path: 'invoice', //发票抬头
          component: invoice,
      }, {
          path: 'payment', //付款页面
          component: payment,
      }, {
          path: 'userValidation', //用户验证
          component: userValidation,
      }, {
          path: 'chooseAddress', //选择地址
          component: chooseAddress,
          children: [{
              path: 'addAddress', //添加地址
              component: addAddress,
              children: [{
                  path: 'searchAddress', //搜索地址
                  component: searchAddress,
              }]
          }, ]
      }, ]
  },