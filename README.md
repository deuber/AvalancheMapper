AvalancheMapper
===============

**AvalancheMapper** is a simple and efficient tool designed to help backcountry skiers and avalanche forecasters accurately record avalanche observation locations by reducing errors in coordinate entry.


Demo
----

![Demo Screenshot](https://github.com/deuber/AvalancheMapper/blob/main/mockup4.png)

Why I Created This Project
--------------------------

As an avid backcountry skier, I sometimes contribute avalanche observations to organizations like the **Sierra Avalanche Center** and **Utah Avalanche Center**. I noticed that manually entering avalanche locations can be error-prone. However, I realized I could extract accurate location coordinates directly from my phone's metadata for the image taken of the avalanche site. This inspired me to create AvalancheMapper, which ensures that location data submitted is both precise and easy to input.

Currently, platforms below do not provide a way for users to input only coordinates:

*   [Sierra Avalanche Center](https://www.sierraavalanchecenter.org/observations#/view/observations)
    
*   [Utah Avalanche Center](https://utahavalanchecenter.org/node/add/avalanche)
    

This project aims to fill that gap by allowing users to:

1.  **Upload an image** to extract GPS metadata and relocate the map picker.
    
2.  **Enter coordinates** manually in either of the supported formats:
    
    *   **Degrees, Minutes, Seconds (DMS):** e.g., 39°08'24.9"N 120°14'06.0"W
        
    *   **Decimal Degrees:** e.g., 39.166175, -120.155778
        
3.  **Manually move the picker** on the interactive map.
    

How to Start the Project
------------------------

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (v16 or later)
    
*   [npm](https://www.npmjs.com/) (comes with Node.js)
    

### Steps to Set Up and Run the Project

1.  clone https://github.com/deuber/AvalancheMapper.gitcd AvalancheMappernpm install
    
2.  In the root of the project directory, create a file named .env and add the following content:  codeGOOGLE\_API\_MAPS\_KEY=your-google-maps-api-keyReplace your-google-maps-api-key with your actual Google Maps API key. You can get your key from the [Google Cloud Console](https://console.cloud.google.com/).
    
3.  Run the server with the following command:   server.js
    
4.  Open your browser and navigate to:arduinoCopy codehttp://localhost:3000 The application should now be running locally, allowing you to enter and visualize avalanche locations.
    

Features
--------

*   **Image Upload with GPS Extraction**:Users can upload a photo (JPG/PNG), and the map picker will automatically relocate to the extracted GPS coordinates.
    
*   **Coordinate Input Flexibility**:Users can enter coordinates in either:
    
    *   **Degrees, Minutes, Seconds (DMS):** e.g., 39°08'24.9"N 120°14'06.0"W
        
    *   **Decimal Degrees:** e.g., 39.166175, -120.155778
        
*   **Manual Picker Adjustment**:Users can drag and drop a marker on the map to manually adjust the location. The updated coordinates display automatically.
    
*   **Thumbnail Preview**:After uploading an image, a thumbnail of the photo is shown for confirmation.
    
*   **Automatic Zoom**:When coordinates are extracted from an image, the map automatically zooms into the marker for precision.
    

How It Works
------------

1.  **Upload an Image**:
    
    *   Ensure the photo was taken with location services enabled so the GPS data is included.
        
    *   The tool extracts the location metadata and updates the map picker.

    ![Demo Screenshot](https://github.com/deuber/AvalancheMapper/blob/main/mockup3.png)
        
2.  **Enter Coordinates Manually**:
    
    *   Enter the coordinates in either **DMS** or **Decimal Degrees** format.
        
    *   The marker will update to the entered location.
        
3.  **Manually Move the Picker**:
    
    *   Simply drag the marker on the map to adjust the location manually.
        
4.  **Verify with Image Thumbnail**:
    
    *   The uploaded image will display as a thumbnail for user confirmation.
        


Use Cases
---------

*   **Backcountry Skiers**: Easily submit accurate avalanche observations without worrying about coordinate errors.
    
*   **Avalanche Forecasters**: Use this tool to reduce inconsistencies in submitted reports and improve the accuracy of avalanche records.
    

Roadmap
-------

*   Add a feature to **parse GPS metadata** directly from uploaded images.
    
*   Integrate directly with platforms like **Sierra Avalanche Center** and **Utah Avalanche Center**.
    
*   Add **mobile-friendly support** for ease of use in the field.
    

Contributing
------------

Contributions are welcome! If you have suggestions for improvements or new features, feel free to:

*   Open an issue
    
*   Submit a pull request
    

License
-------

This project is open-source and licensed under the [MIT License](LICENSE).

Acknowledgments
---------------

*   Inspired by the need to improve avalanche observation reporting for:
    
    *   [Sierra Avalanche Center](https://www.sierraavalanchecenter.org)
        
    *   [Utah Avalanche Center](https://utahavalanchecenter.org)
        
*   Thanks to all **backcountry skiers** and **avalanche forecasters** for their dedication to safety in the mountains.