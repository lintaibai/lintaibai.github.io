import{_ as a,c as n,o as p,a2 as l}from"./chunks/framework.2deZJFL-.js";const i="/images/echarts-huan1.png",g=JSON.parse('{"title":"echarts环形图使用配置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/note/echarts/echarts-环形图.md","filePath":"src/note/echarts/echarts-环形图.md","lastUpdated":1750413191000}'),e={name:"src/note/echarts/echarts-环形图.md"};function t(c,s,h,r,o,d){return p(),n("div",null,s[0]||(s[0]=[l('<h1 id="echarts环形图使用配置" tabindex="-1">echarts环形图使用配置 <a class="header-anchor" href="#echarts环形图使用配置" aria-label="Permalink to &quot;echarts环形图使用配置&quot;">​</a></h1><h2 id="_1、认识安装和使用" tabindex="-1">1、认识安装和使用 <a class="header-anchor" href="#_1、认识安装和使用" aria-label="Permalink to &quot;1、认识安装和使用&quot;">​</a></h2><h3 id="官网效果" tabindex="-1">官网效果 <a class="header-anchor" href="#官网效果" aria-label="Permalink to &quot;官网效果&quot;">​</a></h3><p><img src="'+i+`" alt="image.png" loading="lazy"></p><h2 id="_2、🍉-简单安装使用" tabindex="-1">2、🍉 简单安装使用 <a class="header-anchor" href="#_2、🍉-简单安装使用" aria-label="Permalink to &quot;2、🍉 简单安装使用&quot;">​</a></h2><p>先确保你安装的是Echarts5，否则的化安装一下</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add echarts</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结构部分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echartradarRef1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width: 50%; height: 400px;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引入部分</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echarts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5.4区别4引入方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echartradarRef1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onMounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initChartradar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>展示一下官方给我们的默认设置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>option = {</span></span>
<span class="line"><span>  tooltip: {</span></span>
<span class="line"><span>    trigger: &#39;item&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  legend: {</span></span>
<span class="line"><span>    top: &#39;5%&#39;,</span></span>
<span class="line"><span>    left: &#39;center&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;Access From&#39;,</span></span>
<span class="line"><span>      type: &#39;pie&#39;,</span></span>
<span class="line"><span>      radius: [&#39;40%&#39;, &#39;70%&#39;],</span></span>
<span class="line"><span>      avoidLabelOverlap: false,</span></span>
<span class="line"><span>      itemStyle: {</span></span>
<span class="line"><span>        borderRadius: 10,</span></span>
<span class="line"><span>        borderColor: &#39;#fff&#39;,</span></span>
<span class="line"><span>        borderWidth: 2</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      label: {</span></span>
<span class="line"><span>        show: false,</span></span>
<span class="line"><span>        position: &#39;center&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      emphasis: {</span></span>
<span class="line"><span>        label: {</span></span>
<span class="line"><span>          show: true,</span></span>
<span class="line"><span>          fontSize: 40,</span></span>
<span class="line"><span>          fontWeight: &#39;bold&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      labelLine: {</span></span>
<span class="line"><span>        show: false</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      data: [</span></span>
<span class="line"><span>        { value: 1048, name: &#39;Search Engine&#39; },</span></span>
<span class="line"><span>        { value: 735, name: &#39;Direct&#39; },</span></span>
<span class="line"><span>        { value: 580, name: &#39;Email&#39; },</span></span>
<span class="line"><span>        { value: 484, name: &#39;Union Ads&#39; },</span></span>
<span class="line"><span>        { value: 300, name: &#39;Video Ads&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="配置代码如下" tabindex="-1">配置代码如下 <a class="header-anchor" href="#配置代码如下" aria-label="Permalink to &quot;配置代码如下&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 环图5 huantu5</span></span>
<span class="line"><span>function initechartbing(id, data) {</span></span>
<span class="line"><span>    let _this = this;</span></span>
<span class="line"><span>    let myChart = echarts.init(document.getElementById(id));</span></span>
<span class="line"><span>    myChart.clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let option = {</span></span>
<span class="line"><span>        tooltip: {</span></span>
<span class="line"><span>            trigger: &#39;item&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        legend: {</span></span>
<span class="line"><span>            bottom: &#39;5%&#39;,</span></span>
<span class="line"><span>            left: &#39;center&#39;,</span></span>
<span class="line"><span>            show:false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        series: [{</span></span>
<span class="line"><span>            name: &#39;Access From&#39;,</span></span>
<span class="line"><span>            type: &#39;pie&#39;,</span></span>
<span class="line"><span>            radius: [&#39;30%&#39;, &#39;60%&#39;],</span></span>
<span class="line"><span>            avoidLabelOverlap: false,</span></span>
<span class="line"><span>            itemStyle: {</span></span>
<span class="line"><span>                borderRadius: 0,</span></span>
<span class="line"><span>                borderColor: &#39;#E9F5FF&#39;,</span></span>
<span class="line"><span>                borderWidth: 10,</span></span>
<span class="line"><span>                normal: {</span></span>
<span class="line"><span>                  // 自定义颜色等</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                emphasis: {</span></span>
<span class="line"><span>                  // 在 hover 状态下不要改变样式</span></span>
<span class="line"><span>                  shadowBlur: 0,</span></span>
<span class="line"><span>                  shadowOffsetX: 0,</span></span>
<span class="line"><span>                  shadowOffsetY: 0,</span></span>
<span class="line"><span>                  color: &#39;inherit&#39; // 保持原有颜色</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            label: {</span></span>
<span class="line"><span>                show: false,</span></span>
<span class="line"><span>                position: &#39;center&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            emphasis: {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                label: {</span></span>
<span class="line"><span>                    show: false,</span></span>
<span class="line"><span>                    fontSize: 28,</span></span>
<span class="line"><span>                    fontWeight: &#39;bold&#39;</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                itemStyle: {</span></span>
<span class="line"><span>                    // 控制放大倍数</span></span>
<span class="line"><span>                    // 这里没有直接的scale属性，但可以通过其他样式来达到类似效果</span></span>
<span class="line"><span>                    // shadowBlur: 10,</span></span>
<span class="line"><span>                    // shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,      </span></span>
<span class="line"><span>                      shadowBlur: 0, // 关闭阴影模糊</span></span>
<span class="line"><span>                    shadowColor: &#39;transparent&#39;,</span></span>
<span class="line"><span>                    shadowOffsetX: 0, // 关闭阴影偏移X</span></span>
<span class="line"><span>                    shadowOffsetY: 0, // 关闭阴影偏移Y</span></span>
<span class="line"><span>                    opacity: 1 // 不改变透明度</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            labelLine: {</span></span>
<span class="line"><span>                show: false</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            data: [</span></span>
<span class="line"><span>                { value: 1048, name: &#39;Search Engine&#39;, itemStyle: { color: &#39;#FFD05B&#39; } },</span></span>
<span class="line"><span>                { value: 735, name: &#39;Direct&#39;, itemStyle: { color: &#39;#45A9FF&#39; } }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  myChart.setOption(option);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//使用 </span></span>
<span class="line"><span>initechartbing(&#39;huantu5&#39;);</span></span></code></pre></div><h2 id="_3、🍉详细参数使用配置" tabindex="-1">3、🍉详细参数使用配置 <a class="header-anchor" href="#_3、🍉详细参数使用配置" aria-label="Permalink to &quot;3、🍉详细参数使用配置&quot;">​</a></h2><h3 id="🍓-禁用-hover-动画" tabindex="-1">🍓 禁用 hover 动画 <a class="header-anchor" href="#🍓-禁用-hover-动画" aria-label="Permalink to &quot;🍓  禁用 hover 动画&quot;">​</a></h3><p>option =&gt; series =&gt;</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // 禁用 hover 动画</span></span>
<span class="line"><span> hoverAnimation: false,</span></span></code></pre></div><h3 id="禁止间距" tabindex="-1">禁止间距 <a class="header-anchor" href="#禁止间距" aria-label="Permalink to &quot;禁止间距&quot;">​</a></h3><p>调整option =&gt; series =&gt; itemStyle</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> itemStyle: {</span></span>
<span class="line"><span>    borderRadius: 0,</span></span>
<span class="line"><span>    borderColor: &#39;#E9F5FF&#39;,</span></span>
<span class="line"><span>    borderWidth: 10,</span></span>
<span class="line"><span>    normal: {</span></span>
<span class="line"><span>      // 自定义颜色等</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    emphasis: {</span></span>
<span class="line"><span>      // 在 hover 状态下不要改变样式</span></span>
<span class="line"><span>      shadowBlur: 0,</span></span>
<span class="line"><span>      shadowOffsetX: 0,</span></span>
<span class="line"><span>      shadowOffsetY: 0,</span></span>
<span class="line"><span>      color: &#39;inherit&#39; // 保持原有颜色</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,19)]))}const u=a(e,[["render",t]]);export{g as __pageData,u as default};
