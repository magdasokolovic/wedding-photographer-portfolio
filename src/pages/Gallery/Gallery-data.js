const galleryPhotos = [
    // "./images/gallery-1.jpg",
    // "./images/gallery-2.jpg", 
    // "./images/gallery-3.jpg", 
    // "./images/gallery-4.jpg", 
    // "./images/gallery-5.jpg", 
    "https://images.unsplash.com/photo-1603214924133-5c2c78471b73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1609151162377-794faf68b02f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];

const imageData = [galleryPhotos, galleryPhotos, galleryPhotos, galleryPhotos]

//grid coordinates: row, row-span, column, column-span
const points = [
    
    [11, 2, 12, 2], 
    [18, 6, 7, 1], 
    [29, 5, 12, 3], 
    [16, 10, 13, 3],
    [30, 14, 5, 2],
]

export {imageData, points}