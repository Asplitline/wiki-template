import{_ as t,c as e,o as l,Q as d}from"./chunks/framework.8adc4ca2.js";const c=JSON.parse('{"title":"快捷键","description":"","frontmatter":{"title":"快捷键","order":1},"headers":[],"relativePath":"pages/custom/config/keyboard.md","lastUpdated":1681395124000}'),a={name:"pages/custom/config/keyboard.md"},r=d(`<h1 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h1><h2 id="git-bash" tabindex="-1">Git Bash <a class="header-anchor" href="#git-bash" aria-label="Permalink to &quot;Git Bash&quot;">​</a></h2><table><thead><tr><th>快捷键</th><th>说明</th></tr></thead><tbody><tr><td>Ctrl + u</td><td>清除到开始</td></tr><tr><td>Ctrl + a</td><td>行首</td></tr><tr><td>Ctrl + e</td><td>行尾</td></tr><tr><td>Ctrl + w</td><td>删除左边字符（单词）</td></tr><tr><td>Ctrl + xx</td><td>行首，行尾切换</td></tr><tr><td>Ctrl + r</td><td>搜索命令</td></tr><tr><td>Ctrl + g</td><td>取消搜索，并恢复原始行</td></tr><tr><td>Ctrl + j</td><td>选中搜索</td></tr><tr><td>Ctrl + u / esc</td><td>删除整行</td></tr></tbody></table><h2 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;Github&quot;">​</a></h2><table><thead><tr><th>按键</th><th>说明</th></tr></thead><tbody><tr><td><code>.</code></td><td>打开 web 编辑器</td></tr><tr><td>Ctrl + k</td><td>github 命令面板</td></tr><tr><td>b</td><td>查看文件历史记录</td></tr><tr><td>l</td><td>行跳转</td></tr><tr><td>t</td><td>文件搜索</td></tr><tr><td>w</td><td>搜索分支</td></tr><tr><td>S 或 /</td><td>聚焦于搜索栏。</td></tr><tr><td>G N</td><td>转到您的通知。</td></tr><tr><td>G C</td><td>转到 Code 选项卡</td></tr><tr><td>G I</td><td>转到 Issues 选项卡。</td></tr><tr><td>G P</td><td>转到 Pull requests 选项卡。</td></tr></tbody></table><h2 id="cmd" tabindex="-1">Cmd <a class="header-anchor" href="#cmd" aria-label="Permalink to &quot;Cmd&quot;">​</a></h2><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>start .</code></td><td>打开当前文件</td></tr><tr><td><code>tree</code></td><td>简略树形结构</td></tr><tr><td><code>dir</code></td><td>列出 文件、目录</td></tr></tbody></table><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">文件名.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询所有运行端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ano</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询某个运行端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-aon</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">findstr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8081</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="vscode" tabindex="-1">VsCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VsCode&quot;">​</a></h2><p>自定义代码折叠区域</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//#region</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//#endregion</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">按键</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl + P</td><td style="text-align:left;">打开文件</td></tr><tr><td style="text-align:left;">Ctrl + Shift + ([ <code>or</code> ])</td><td style="text-align:left;">折叠/展开代码块（当前）</td></tr><tr><td style="text-align:left;">Ctrl + K (Ctrl + 0 <code>or</code> Ctrl + J)</td><td style="text-align:left;">折叠/展开所有代码</td></tr><tr><td style="text-align:left;">Ctrl + G</td><td style="text-align:left;">行跳转</td></tr><tr><td style="text-align:left;">Ctrl + D</td><td style="text-align:left;">多次触发后，在所有相同文字后追加光标</td></tr><tr><td style="text-align:left;">Ctrl + R</td><td style="text-align:left;">切换工作区</td></tr><tr><td style="text-align:left;">Ctrl + T</td><td style="text-align:left;">全局元素导航</td></tr><tr><td style="text-align:left;">F12</td><td style="text-align:left;">跳到声明（ Ctrl + LeftClick 同效果）</td></tr><tr><td style="text-align:left;">Alt + F12</td><td style="text-align:left;">查看声明（ Ctrl + LeftClick 同效果）</td></tr><tr><td style="text-align:left;">Alt + (Left <code>or</code> Right)</td><td style="text-align:left;">上次/下次光标位置</td></tr><tr><td style="text-align:left;">Alt + Shift + T</td><td style="text-align:left;">切换已打开的工作区（与 Ctrl + Shift + P 中 swtich window 类似）</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl + KS</td><td style="text-align:left;">快捷键</td></tr><tr><td style="text-align:left;">Ctrl + F2</td><td style="text-align:left;">选中所有匹配项</td></tr><tr><td style="text-align:left;">Ctrl + KX</td><td style="text-align:left;">减去末尾空格</td></tr><tr><td style="text-align:left;">Ctrl + Shift + L</td><td style="text-align:left;">选中文本的所有相同内容处，出现光标</td></tr><tr><td style="text-align:left;">Ctrl + Shift + \\</td><td style="text-align:left;">跳转到匹配括号</td></tr><tr><td style="text-align:left;">Alt + Shift + arrowRight</td><td style="text-align:left;">选中括号间文本</td></tr><tr><td style="text-align:left;">Ctrl + p 输入 @ <code>or</code> Ctrl + Shift + o</td><td style="text-align:left;">符号导航</td></tr><tr><td style="text-align:left;">Alt + Q</td><td style="text-align:left;">当前文件终端</td></tr><tr><td style="text-align:left;">Ctrl + shift + C</td><td style="text-align:left;">当前工作区终端</td></tr><tr><td style="text-align:left;">Ctrl + Alt + R</td><td style="text-align:left;">搜索代码片段</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">自定义快捷键</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl + ED</td><td style="text-align:left;">打开文件夹</td></tr><tr><td style="text-align:left;">Ctrl + KZ</td><td style="text-align:left;">禅模式</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">按键</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl+P</td><td style="text-align:left;">打开文件</td></tr><tr><td style="text-align:left;">Ctrl+B</td><td style="text-align:left;">侧栏</td></tr><tr><td style="text-align:left;">Shift+Alt+F</td><td style="text-align:left;">格式化代码</td></tr><tr><td style="text-align:left;">Shift+Alt+A</td><td style="text-align:left;">块注释</td></tr><tr><td style="text-align:left;">Alt + Shift + i</td><td style="text-align:left;">所选文本末尾追加光标</td></tr><tr><td style="text-align:left;">Alt + leftClick</td><td style="text-align:left;">选中状态</td></tr><tr><td style="text-align:left;">Ctrl + Alt + (Up <code>or</code> Down)</td><td style="text-align:left;">连续的多列上，同时出现光标（与 Alt + 鼠标左键等效）</td></tr><tr><td style="text-align:left;">Ctrl + Shift + P</td><td style="text-align:left;"><strong>命令面板</strong></td></tr><tr><td style="text-align:left;">Ctrl + \\</td><td style="text-align:left;">分屏</td></tr><tr><td style="text-align:left;">Ctrl + [number]</td><td style="text-align:left;">分屏切换</td></tr><tr><td style="text-align:left;">Ctrl + J</td><td style="text-align:left;">显示控制台</td></tr><tr><td style="text-align:left;">Ctrl + Shift + (N <code>or</code> W)</td><td style="text-align:left;">新开软件窗口/关闭软件窗口</td></tr><tr><td style="text-align:left;">Ctrl + (Pagedown <code>or</code> Pageup)</td><td style="text-align:left;">文件间切换</td></tr><tr><td style="text-align:left;">Ctrl + (Left <code>or</code> Right)</td><td style="text-align:left;">单词间移动</td></tr><tr><td style="text-align:left;">Ctrl + (Backspace <code>or</code> delete)</td><td style="text-align:left;">删除前一个单词/后一个单词</td></tr><tr><td style="text-align:left;">Ctrl + Shift + E <code>or</code> Ctrl + Q</td><td style="text-align:left;"><strong>聚焦到侧边栏</strong></td></tr><tr><td style="text-align:left;">Ctrl + Shfit + F</td><td style="text-align:left;">全局搜索（选中文本）</td></tr><tr><td style="text-align:left;">Alt + Z</td><td style="text-align:left;">自动换行</td></tr><tr><td style="text-align:left;">F8</td><td style="text-align:left;">聚焦下一个错误</td></tr><tr><td style="text-align:left;"><strong>Ctrl + Tab</strong></td><td style="text-align:left;"><strong>切换 Tab</strong></td></tr><tr><td style="text-align:left;">Ctrl + KR</td><td style="text-align:left;">快捷键 pdf</td></tr><tr><td style="text-align:left;">Ctrl + Shift + H</td><td style="text-align:left;">替换文件</td></tr></tbody></table><h3 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h3><table><thead><tr><th>按键</th><th>功能</th><th>扩展名称</th></tr></thead><tbody><tr><td>alt + shift + p</td><td>以新窗口打开项目（自定义快捷键 projectManager.listProjectsNewWindow）</td><td>Project Manager</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h2 id="chrome" tabindex="-1">Chrome <a class="header-anchor" href="#chrome" aria-label="Permalink to &quot;Chrome&quot;">​</a></h2><table><thead><tr><th>按键</th><th>功能</th></tr></thead><tbody><tr><td>Ctrl+L / Alt+D / F6</td><td>聚焦到地址栏</td></tr><tr><td>esc</td><td>地址栏复原</td></tr><tr><td>Ctrl + Alt + Esc</td><td>窗口置底</td></tr><tr><td>Shift + Enter</td><td>以当前地址新开窗口</td></tr></tbody></table><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>copy()</td><td>复制数据</td></tr><tr><td>document.body.contentEditable = true</td><td>文本可编辑</td></tr></tbody></table><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">按键</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl+ Alt</td><td style="text-align:left;">获取鼠标</td></tr><tr><td style="text-align:left;">Shfit + z +z</td><td style="text-align:left;">保存退出</td></tr><tr><td style="text-align:left;">pwd</td><td style="text-align:left;">当前目录</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>pwd</td><td>当前目录</td></tr><tr><td>mkdir</td><td>新建目录</td></tr><tr><td>ls</td><td>显示目录内容</td></tr><tr><td>touch</td><td>创建空文件</td></tr><tr><td>dir</td><td>显示目录</td></tr><tr><td>mv</td><td>改名</td></tr></tbody></table><h2 id="potplayer" tabindex="-1">Potplayer <a class="header-anchor" href="#potplayer" aria-label="Permalink to &quot;Potplayer&quot;">​</a></h2><table><thead><tr><th>按键</th><th>功能</th></tr></thead><tbody><tr><td>P</td><td>添加书签</td></tr><tr><td>Alt + z</td><td>书签定位</td></tr></tbody></table><h2 id="photoshop" tabindex="-1">PhotoShop <a class="header-anchor" href="#photoshop" aria-label="Permalink to &quot;PhotoShop&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">按键</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">Alt +/-</td><td style="text-align:left;">放大/缩小</td></tr><tr><td style="text-align:left;">Space</td><td style="text-align:left;">拖动图片</td></tr><tr><td style="text-align:left;">Ctrl + R</td><td style="text-align:left;">标尺</td></tr><tr><td style="text-align:left;">Ctrl + D</td><td style="text-align:left;">清除选区</td></tr><tr><td style="text-align:left;">Shift + A</td><td style="text-align:left;">箭头</td></tr><tr><td style="text-align:left;">Shift + M</td><td style="text-align:left;">矩形选择框</td></tr><tr><td style="text-align:left;">Alt + Delete</td><td style="text-align:left;">前色填充背景</td></tr><tr><td style="text-align:left;">Ctrl + Delete</td><td style="text-align:left;">后色填充背景</td></tr><tr><td style="text-align:left;">Ctrl + T</td><td style="text-align:left;">等比例缩放</td></tr><tr><td style="text-align:left;">Ctrl + left</td><td style="text-align:left;">移动工具下，选中图层</td></tr></tbody></table><h2 id="onenote" tabindex="-1">OneNote <a class="header-anchor" href="#onenote" aria-label="Permalink to &quot;OneNote&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">按键</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl+ &gt;</td><td style="text-align:left;">项目符号</td></tr><tr><td style="text-align:left;">Ctrl+ /</td><td style="text-align:left;">数字符号</td></tr><tr><td style="text-align:left;">Ctrl+ Alt + 1</td><td style="text-align:left;">一级标题</td></tr><tr><td style="text-align:left;">Alt + Shift + 1</td><td style="text-align:left;">折叠一级标题</td></tr><tr><td style="text-align:left;">Ctrl+ Shift + &gt;</td><td style="text-align:left;">字体增大</td></tr><tr><td style="text-align:left;">Ctrl+ B/I/U</td><td style="text-align:left;">加粗/斜体/下划线</td></tr><tr><td style="text-align:left;">Alt + Shift + F/T/D</td><td style="text-align:left;">插入时间+日期/时间/日期</td></tr></tbody></table>`,27),s=[r];function n(i,o,y,f,h,g){return l(),e("div",null,s)}const p=t(a,[["render",n]]);export{c as __pageData,p as default};
