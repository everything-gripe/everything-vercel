# Everything Vercel

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE.md)

Everything Vercel is a generic implementation of the Everything API guidelines through the [IService](https://github.com/everything-gripe/everything-sdk/blob/master/service.ts) interface defined in the [Everything SDK](https://github.com/everything-gripe/everything-sdk), for hosting with Vercel. It allows you to connect to services through the Everything middleware, providing a unified interface for making requests.

## Features

- Easy hosting on Vercel
- Seamless integration with services
- Consolidated API access through the Everything middleware
- Streamlined request handling

## Getting Started

To get started with Everything Vercel, follow these steps:

1. Clone the repository: `git clone https://github.com/everything-gripe/everything-vercel.git`
2. Install the required dependencies: `npm install`
3. Start the development server: `npm run start:dev`
4. Access services through the Everything middleware by constructing the request URL in the format: `https://everything.gripe/user/localhost:3000:<username>?everything-service=<service>`

## Contributing

Contributions are welcome! If you would like to contribute to Everything Vercel, please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Everything Vercel is licensed under the [ISC License](LICENSE.md).
