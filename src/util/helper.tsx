const viewSite = (url: string) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if(newTab) newTab.opener = null;
};

export {
    viewSite
};