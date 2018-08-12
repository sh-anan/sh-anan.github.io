/**
 * Created by anan on 2018/8/13.
 */

(function (doc) {
    var
        before = 'web-site/',
        after = '/index.html',
        list = [
            {
                src: 'mobile_anan',
                name: 'Banca'
            },
            {
                src: 'foot',
                name: '人气美食'
            },
            {
                src: 'site_group',
                name: '河北省水资源税管理系统',
                index: 1
            },
            {
                src: 'site_group',
                name: '河北省水资源税管理系统',
                index: 2
            },
            {
                src: 'site_group',
                name: '河北恒源水务科技有限公司',
                index: 3
            },
            {
                src: 'site_group',
                name: '水资源管理系统',
                index: 4
            },
            {
                src: 'site_group',
                name: '邯郸市地下水动态监控管理信息系统',
                index: 5
            },
            {
                src: 'site_group',
                name: '北京朝阳系统综合管理平台',
                index: 6
            }
        ],
        html = '',
        parent = doc.querySelector('.page-entry-list');
    list.forEach(function (item) {
        var
            end = item.index ? '/page' + item.index + '.html' : after,
            src = before + item.src + end;
        html += '<li class="page-entry-item"><a href="' + src + '" class="tap-el">' + item.name + '</a></li>'
    });
    parent.innerHTML = html;
})(document);