class Link{
	public name:string;
	public url: string;

	constructor(name: string,url: string ){
		this.name = name
		this.url = url
	}
}
class Player{
	public name: string;
	public profilePictureURL: string

	constructor(name:string, profilePictureURL?:string)
	{
		this.name = name;
		this.profilePictureURL = profilePictureURL || "assets/defaultProfile.png"
	}
}

export {Link, Player} 