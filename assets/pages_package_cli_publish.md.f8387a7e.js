import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.8adc4ca2.js";const h=JSON.parse('{"title":"版本发布","description":"","frontmatter":{"title":"版本发布","order":5},"headers":[],"relativePath":"pages/package/cli/publish.md","lastUpdated":1681395124000}'),o={name:"pages/package/cli/publish.md"},p=l(`<h1 id="版本发布" tabindex="-1">版本发布 <a class="header-anchor" href="#版本发布" aria-label="Permalink to &quot;版本发布&quot;">​</a></h1><p>版本规范：<a href="https://semver.org/" target="_blank" rel="noreferrer">https://semver.org/</a></p><h2 id="标准版本" tabindex="-1">标准版本 <a class="header-anchor" href="#标准版本" aria-label="Permalink to &quot;标准版本&quot;">​</a></h2><p><code>major</code>：主版本，不兼容的 API 修改</p><p><code>minor</code>：次版本，当向下兼容的功能性新增</p><p><code>patch</code>：修订号，向下兼容的问题修正</p><h2 id="先行版本" tabindex="-1">先行版本 <a class="header-anchor" href="#先行版本" aria-label="Permalink to &quot;先行版本&quot;">​</a></h2><p>先行版本号可以加到<code>“主版本号.次版本号.修订号”</code>的后面，先加上一个连接号再加上一连串以句点分隔的标识符和版本编译信息。</p><p><code>3.2.0-beta.5</code></p><p><code>alpha</code>：内部版本</p><p><code>beta</code>：公测版本</p><p><code>rc</code> 即 <code>Release candiate</code>：正式版本候选版本</p><h2 id="发布版本" tabindex="-1">发布版本 <a class="header-anchor" href="#发布版本" aria-label="Permalink to &quot;发布版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## version 1.0.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 升级补丁版本号 1.0.1</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">patch</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 升级小版本号 1.1.0</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minor</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 升级大版本号 2.0.0</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">major</span></span></code></pre></div><p><code>semver</code>：通过 js 处理版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">semver</span></span></code></pre></div><h2 id="依赖详解" tabindex="-1">依赖详解 <a class="header-anchor" href="#依赖详解" aria-label="Permalink to &quot;依赖详解&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">signale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.4.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">figlet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">16.x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~5.4.6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">yargs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^14.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>x.y.z</code> - 主版本号.次版本号.修订号</p><table><thead><tr><th>标识</th><th>说明</th></tr></thead><tbody><tr><td>1.4.0</td><td>固定版本号</td></tr><tr><td>*</td><td>任意版本 （&gt;=0）</td></tr><tr><td>16.x</td><td>主要版本（16.0.0&lt;= version &lt;17.0.0）</td></tr><tr><td>16.3.x</td><td>次要版本（16.3.0&lt;= version &lt;16.4.0）</td></tr><tr><td>~</td><td>保持修订版本(<code>z</code>)最新。xy 不变。</td></tr><tr><td>^</td><td>保持次版本和修订版本(<code>y,z</code>)最新。x 不变</td></tr></tbody></table><p><strong>特殊</strong> - 主版本为 0</p><ul><li>主版本号和次版本号都为 <code>0</code>: <code>^0.0.z</code>、<code>~0.0.z</code> 都被当作固定版本</li><li>主版本号为 <code>0</code>: <code>^0.y.z</code> 表现和 <code>~0.y.z</code> 相同，只保持修订号（<code>z</code>）为最新版本。</li></ul><h2 id="依赖更新" tabindex="-1">依赖更新 <a class="header-anchor" href="#依赖更新" aria-label="Permalink to &quot;依赖更新&quot;">​</a></h2><p><code>npm outdated</code> ：列出有哪些还没有升级到最新版本的依赖：</p><ul><li>黄色：不符合我们指定的语意化版本范围 - 不需要升级</li><li>红色：符合指定的语意化版本范围 - 需要升级</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">outedated</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 升级红色依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span></code></pre></div><p>总结：</p><ul><li>升级依赖：修改 <code>package.json</code>文件的依赖版本，执行 <code>npm install</code></li><li>降级依赖:：执行 <code>npm install package@version</code>，改动<code>package.json</code><strong>不会对依赖进行降级</strong></li></ul><blockquote><p>注意改动依赖后提交<code>lock</code>文件</p></blockquote><p>自动增加版本号</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">predeploy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">npm version patch</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h2><p>node 包管理器</p><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## nvm 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 安装 node.js 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">12.14.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 切换 node.js 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">12.14.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## node.js 版本列表</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span></code></pre></div><h3 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h3><p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm 下载地址</a></p><h2 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h2><h3 id="基本使用-1" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用-1" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><p>解决问题：调用项目内部安装模块</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mocha</span></span></code></pre></div><p>一般来说，调用 Mocha ，通过 package.json 中 scripts 字段调用。但想通过命令行调用，写法如下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 根目录下执行</span></span>
<span class="line"><span style="color:#FFCB6B;">node-modules/.bin/mocha</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre></div><p>npx 调用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mocha</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre></div><p>原理：npx 会到<code>node_modules/.bin</code>路径和环境变量<code>$PATH</code>里面，检查命令是否存在</p><p>如果模块全局安装，也能通过 npx 运行</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-react-app</span></span></code></pre></div><h3 id="no-install-和-ignore-existing" tabindex="-1">--no-install 和- -ignore-existing <a class="header-anchor" href="#no-install-和-ignore-existing" aria-label="Permalink to &quot;--no-install 和- -ignore-existing&quot;">​</a></h3><p><code>--no-install</code>参数：强制使用本地模块，不下载远程模块。本地不存在，报错。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http-server</span></span></code></pre></div><p><code>--ignore-existing</code>参数：忽略本地的同名模块，强制安装使用远程模块</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ignore-existing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-react-app</span></span></code></pre></div><h3 id="运行指定-node-版本" tabindex="-1">运行指定 node 版本 <a class="header-anchor" href="#运行指定-node-版本" aria-label="Permalink to &quot;运行指定 node 版本&quot;">​</a></h3><p>指定某个版本的 Node 运行脚本。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node@0.12.8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre></div><p>原理：从 npm 下载这个版本的 node，使用后再删掉</p><p>-p 参数：指定 npx 所要安装的模块</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node@0.12.8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#FFCB6B;">v0.12.8</span></span></code></pre></div><p>作用：先安装，再执行。可以用于多个模块安装执行</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lolcatjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cowsay</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>-c 参数：</p><p>作用 1：将所有命令都用 npx 解释</p><p>默认情况下：npx 安装多个模块时，只有第一个模块会使用 npx 安装。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lolcatjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cowsay</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cowsay hello | lolcatjs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 报错</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lolcatjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cowsay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cowsay hello | lolcatjs</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>作用 2：带入环境变量</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">echo &quot;$npm_package_name&quot;</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="相关链接-1" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接-1" aria-label="Permalink to &quot;相关链接&quot;">​</a></h3><p><a href="http://www.ruanyifeng.com/blog/2019/02/npx.html" target="_blank" rel="noreferrer">npx 使用教程</a></p>`,70),e=[p];function t(c,r,i,y,d,C){return n(),a("div",null,e)}const F=s(o,[["render",t]]);export{h as __pageData,F as default};
