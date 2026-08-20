// Netlify-specific Ultraviolet configuration.
// This replaces the stock config copied from the UV package during the build.
self.__uv$config = {
	prefix: "/uv/service/",
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: "/uv/uv.handler.js",
	client: "/uv/uv.client.js",
	bundle: "/uv/uv.bundle.js",
	config: "/uv/uv.config.js",
	sw: "/uv/uv.sw.js",
};
