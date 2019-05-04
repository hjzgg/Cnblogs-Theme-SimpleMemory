require.config({
    baseUrl: getJsDelivrUrl(),
    waitSeconds: 100,
    map: {
        '*': {
            'css': setFileNameMin('cnblogs_css.min', 'js')
        }
    },
    paths: {
        //-- 菜单滚动条
        optiscroll: setFileNameMin('cnblogs_jquery.optiscroll', 'js'),
        //-- 进度条
        ToProgress: setFileNameMin('cnblogs_ToProgress.min', 'js'),
        //-- 旋转
        rotate: setFileNameMin('cnblogs_jquery.rotate.min', 'js'),
        //-- snap svg
        snapSvg: setFileNameMin('cnblogs_snap.svg-min', 'js'),
        //-- 菜单
        classie: setFileNameMin('cnblogs_classie', 'js'),
        main4: setFileNameMin('cnblogs_main4', 'js'),
        //-- bootstrap
        bootstrap: setFileNameMin('cnblogs_bootstrap.min', 'js'),
        //-- baguetteBox 图片灯箱
        baguetteBox: setFileNameMin('cnblogs_baguetteBox.min', 'js'),
        //-- 文章标题
        title: setFileNameMin('cnblogs_articleTitle', 'js'),
        //-- 文章目录
        marvin: setFileNameMin('cnblogs_marvin.nav2', 'js'),
        //-- 文章后缀
        articleStatement: setFileNameMin('cnblogs_articleStatement', 'js'),
        //-- 代码高亮 - prettify
        codePrettify: setFileNameMin('cnblogs_run_prettify', 'js'),
        codeDesert: setFileNameMin('cnblogs_run_prettify', 'js'),
        codeSunburst: setFileNameMin('cnblogs_run_prettify', 'js'),
        codeObsidian: setFileNameMin('cnblogs_run_prettify', 'js'),
        codeDoxy: setFileNameMin('cnblogs_run_prettify', 'js'),
        //-- 代码高亮 - highlightjs
        highlightjs: setFileNameMin('cnblogs_highlight.min', 'js'),
        //-- 主页头图动画
        circleMagic: setFileNameMin('cnblogs_circleMagic', 'js'),
        //-- 非主页头图动画
        TweenMax: setFileNameMin('cnblogs_TweenMax.min', 'js'),
        MyTween: setFileNameMin('cnblogs_MyTween', 'js'),
	    //-- 背景动画：丝带（随机）
        RibbonsEffect: setFileNameMin('cnblogs_RibbonsEffect', 'js'),
        //-- tools
        tools: setFileNameMin('cnblogs_tools', 'js'),
        //-- base
        base: setFileNameMin('cnblogs_base', 'js'),
    },
    shim:{
        optiscroll: {
            deps: ['css!'+getJsDelivrUrl('cnblogs_cnblogs_optiscroll.css')]
        },
        classie: {
            deps: ['snapSvg'],
        },
        main4: {
            deps: ['snapSvg','classie', 'css!'+getJsDelivrUrl('cnblogs_menu_bubble.css')]
        },
        baguetteBox: {
            exports: 'baguetteBox',
            deps: ['css!'+getJsDelivrUrl('cnblogs_baguetteBox.min.css'), 'css!'+getJsDelivrUrl('cnblogs_gallery-clean.css')]
        },
        codePrettify: {
            deps: ['css!'+getJsDelivrUrl('cnblogs_codePrettify.css')]
        },
        codeDesert: {
            deps: ['css!'+getJsDelivrUrl('cnblogs_codeDesert.css')]
        },
        codeSunburst: {
            deps: ['css!'+getJsDelivrUrl('cnblogs_codeSunburst.css')]
        },
        codeObsidian: {
            deps: ['css!'+getJsDelivrUrl('cnblogs_codeObsidian.css')]
        },
        codeDoxy: {
            deps: ['css!'+getJsDelivrUrl('cnblogs_codeDoxy.css')]
        },
        marvin: {
            deps: ['title', 'bootstrap', 'css!'+getJsDelivrUrl('cnblogs_marvin.nav2.css')]
        },
        MyTween: {
            deps: ['TweenMax']
        },
        base: {
            deps: [
                'tools',
                'css!https://at.alicdn.com/t/font_543384_ezv3l7gd9r7.css', // 阿里云字体图标
            ]
        }
    }
});
