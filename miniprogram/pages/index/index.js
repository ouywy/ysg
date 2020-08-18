// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[
            {img_src:"../../images/dm.jpg"},
            {img_src:"../../images/hh.jpg"},
            {img_src:"../../images/mm.jpg"},
            {img_src:"../../images/yl.jpg"},

        ],
        goodsList:[
            {
                img_src:"../../images/dm.jpg",
                title:"牛皮纸餐盒一次性餐盒长方形沙拉盒烤肉饭外卖打包盒商用"
            },
            {
                img_src:"../../images/hh.jpg",
                title:"牛皮纸餐盒一次性餐盒长方形沙拉盒烤肉饭外卖打包盒商用"
            },
            {
                img_src:"../../images/mm.jpg",
                title:"牛皮纸餐盒一次性餐盒长方形沙拉盒烤肉饭外卖打包盒商用"
            },
            {
                img_src:"../../images/yl.jpg",
                title:"牛皮纸餐盒一次性餐盒长方形沙拉盒烤肉饭外卖打包盒商用"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.request({
        //   url: 'test.php', //仅为示例，并非真实的接口地址
        //   data: {
        //     x: '',
        //     y: ''
        //   },
        //   header: {
        //     'content-type': 'application/json' // 默认值
        //   },
        //   success (res) {
        //     console.log(res.data)
        //   }
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})