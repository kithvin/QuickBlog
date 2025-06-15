import ImageKit from "imagekit";

// Create an ImageKit instance with your API keys and URL
var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY, // Public API key
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY, // Private API key
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT // URL endpoint for image access
});

export default imagekit; // Export the instance to use in other files