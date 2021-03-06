let tool = {};


tool.getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }

    else if (document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

/**
 * 获取时间戳
 */
tool.getTimestamp = () => {
    return new Date().getTime();
}

export default tool;
