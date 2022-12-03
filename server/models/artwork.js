class Artwork {
    constructor(id,title,description,size,technique,category,available,url,base64Img){
        this.id = id;
        this.title=title,
        this.description=description;
        this.size=size;
        this.technique=technique;
        this.category=category;
        this.available=available
        this.url=url,
        this.base64Img=base64Img
    }
};

module.exports=Artwork