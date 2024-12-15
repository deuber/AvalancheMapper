# AvalancheMapper

AvalancheMapper is a simple and efficient tool designed to help backcountry skiers and avalanche forecasters accurately record avalanche observation locations by reducing errors in coordinate entry.

## Why I Created This Project

As an avid backcountry skier, I often contribute avalanche observations to organizations like the Sierra Avalanche Center and Utah Avalanche Center. I noticed that manually entering avalanche locations can be error-prone. However, I realized I could extract accurate location coordinates directly from my phone's metadata for the image taken of the avalanche site. This inspired me to create AvalancheMapper, which ensures that location data submitted is both precise and easy to input.

Currently, platforms below do not provide a way for users to input only coordinates. 
- [Sierra Avalanche Center](https://www.sierraavalanchecenter.org/observations#/view/observations)
- [Utah Avalanche Center](https://utahavalanchecenter.org/node/add/avalanche)


This project aims to fill that gap by allowing users to either:
- Extract coordinates from their phone's image metadata in either format:
  - **Degrees, Minutes, Seconds (DMS):** e.g., `39°08'24.9"N 120°14'06.0"W`
  - **Decimal Degrees:** e.g., `39.166175, -120.155778`
- Or Manually pick coordinates on the map

## How to Start the Project

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps to Set Up and Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/deuber/AvalancheMapper.git
   cd AvalancheMapper
   npm install

2. **Create .env file **:

Create the .env File: In the root of the project directory, create a file named .env and add the following content:

GOOGLE_API_MAPS_KEY=your-google-maps-api-key

Replace your-google-maps-api-key with your actual Google Maps API key. You can get your key from the Google Cloud Console.

3. **Start the Server **:

node server.js

4. **Access the Application **:
Access the Application: Open your browser and navigate to:

http://localhost:3000


The application should now be running locally, allowing you to enter and visualize avalanche locations.

## Features

- **Coordinate Input Flexibility**: Users can drag and drop a marker on the map or manually enter coordinates in either DMS or Decimal Degrees format.
- **Accurate Mapping**: The entered coordinates update the marker on the map, ensuring precise location data.
- **User-Friendly Interface**: Simplified UI to make the process intuitive, even for non-technical users.

## How It Works

1. Take a picture of the avalanche with your phone. Ensure location services are enabled so the image includes GPS metadata.
2. Copy the coordinates from your phone's metadata or manually enter them into the tool.
3. Alternatively, drag the marker on the map to the exact avalanche location.
4. Submit the information to ensure precise avalanche observation reporting.

## Demo

![Demo Screenshot](https://github.com/deuber/AvalancheMapper/blob/main/mockup.png)

## Use Cases

- **Backcountry Skiers**: Easily submit accurate avalanche observations without worrying about coordinate errors.
- **Avalanche Forecasters**: Use this tool to reduce inconsistencies in submitted reports and improve the accuracy of avalanche records.

## Roadmap

- Add a feature to parse GPS metadata directly from uploaded images.
- Integrate directly with platforms like Sierra Avalanche Center and Utah Avalanche Center.
- Add mobile-friendly support for ease of use in the field.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is open-source and licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need to improve avalanche observation reporting for [Sierra Avalanche Center](https://www.sierraavalanchecenter.org) and [Utah Avalanche Center](https://utahavalanchecenter.org).
- Thanks to all backcountry skiers and avalanche forecasters for their dedication to safety in the mountains.
