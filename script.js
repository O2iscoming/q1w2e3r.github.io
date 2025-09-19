// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 更改标题颜色
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? '#ffffff' : 'red';
    });
    
    // 显示当前日期
    const date = new Date();
    const footer = document.querySelector('footer');
    footer.innerHTML += `<p>今天是: ${date.toLocaleDateString()}</p>`;
});