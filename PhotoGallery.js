// Placeholder image data (REPLACE with your actual LOCAL filenames for each folder)
const imageData = {
    Ixus115: [
        'Ixus115/2IMG_5091.JPG', 'Ixus115/3IMG_4129.JPG', 
        'Ixus115/4IMG_3424.JPG', 'Ixus115/5IMG_3421.JPG', 'Ixus115/6IMG_3860.JPG', 
        'Ixus115/7IMG_3602.JPG', 'Ixus115/8IMG_4146.JPG', 'Ixus115/9IMG_4632.JPG', 
        'Ixus115/10IMG_4768.JPG', 'Ixus115/11IMG_4918.JPG', 'Ixus115/12IMG_4972.JPG', 
        'Ixus115/IMG_2659.JPG', 'Ixus115/IMG_2714.JPG', 'Ixus115/IMG_2883.JPG', 
        'Ixus115/IMG_2935.JPG', 'Ixus115/IMG_3010.JPG', 'Ixus115/IMG_3025.JPG', 
        'Ixus115/IMG_3117.JPG', 'Ixus115/IMG_3172.JPG', 'Ixus115/IMG_3179.JPG', 
        'Ixus115/IMG_3185.JPG', 'Ixus115/IMG_3187.JPG', 'Ixus115/IMG_3192.JPG',     
        'Ixus115/IMG_3200.JPG', 'Ixus115/IMG_3260.JPG', 'Ixus115/IMG_3267.JPG', 
        'Ixus115/IMG_3305.JPG', 'Ixus115/IMG_3308.JPG', 'Ixus115/IMG_3315.JPG', 
        'Ixus115/IMG_3318.JPG', 'Ixus115/IMG_3322.JPG', 'Ixus115/IMG_3363.JPG', 
        'Ixus115/IMG_3410.JPG', 'Ixus115/IMG_3426.JPG', 'Ixus115/IMG_3430.JPG', 
        'Ixus115/IMG_3432.JPG', 'Ixus115/IMG_3433.JPG', 'Ixus115/IMG_3434.JPG', 
        'Ixus115/IMG_3436.JPG', 'Ixus115/IMG_3469.JPG', 'Ixus115/IMG_3475.JPG', 
        'Ixus115/IMG_3478.JPG', 'Ixus115/IMG_3507.JPG', 'Ixus115/IMG_3537.JPG', 
        'Ixus115/IMG_3553.JPG', 'Ixus115/IMG_3571.JPG', 'Ixus115/IMG_3586.JPG', 
        'Ixus115/IMG_3588.JPG', 'Ixus115/IMG_3636.JPG', 'Ixus115/IMG_3670.JPG', 
        'Ixus115/IMG_3788.JPG', 'Ixus115/IMG_3792.JPG', 'Ixus115/IMG_3793.JPG', 
        'Ixus115/IMG_3861.JPG', 'Ixus115/IMG_3862.JPG', 'Ixus115/IMG_3865.JPG', 
        'Ixus115/IMG_3872.JPG', 'Ixus115/IMG_3874.JPG', 'Ixus115/IMG_3877.JPG', 
        'Ixus115/IMG_3899.JPG', 'Ixus115/IMG_3922.JPG', 'Ixus115/IMG_4047.JPG', 
        'Ixus115/IMG_4127.JPG', 'Ixus115/IMG_4187.JPG', 'Ixus115/IMG_4237.JPG', 
        'Ixus115/IMG_4238.JPG', 'Ixus115/IMG_4328.JPG', 'Ixus115/IMG_4371.JPG', 
        'Ixus115/IMG_4390.JPG', 'Ixus115/IMG_4402.JPG', 'Ixus115/IMG_4405.JPG', 
        'Ixus115/IMG_4644.JPG', 'Ixus115/IMG_4682.JPG', 'Ixus115/IMG_4696.JPG', 
        'Ixus115/IMG_4791.JPG', 'Ixus115/IMG_4920.JPG', 'Ixus115/IMG_4984.JPG', 
        'Ixus115/IMG_4986 - Copy.JPG', 'Ixus115/IMG_4986.JPG', 'Ixus115/IMG_5105.JPG', 
        'Ixus115/IMG_5109.JPG', 'Ixus115/IMG_5287.JPG', 'Ixus115/IMG_5297.JPG', 
        'Ixus115/IMG_5330.JPG', 'Ixus115/IMG_5340.JPG', 'Ixus115/IMG_5373.JPG', 
        'Ixus115/IMG_5376.JPG', 'Ixus115/IMG_5381.JPG', 'Ixus115/IMG_5399.JPG', 
        'Ixus115/IMG_5462.JPG', 'Ixus115/IMG_5585.JPG', 'Ixus115/IMG_5592.JPG', 
        'Ixus115/IMG_5691.JPG', 'Ixus115/IMG_5784.JPG', 'Ixus115/IMG_6025.JPG', 
        'Ixus115/IMG_6031.JPG', 'Ixus115/IMG_6052.JPG'
    ],
    Ixus970: [
        'Ixus970/IMG_0002.JPG', 'Ixus970/IMG_0007.JPG', 'Ixus970/IMG_0020.JPG', 
        'Ixus970/IMG_0026.JPG', 'Ixus970/IMG_0037.JPG', 'Ixus970/IMG_0060.JPG', 
        'Ixus970/IMG_0075.JPG', 'Ixus970/IMG_0086.JPG', 'Ixus970/IMG_0098.JPG', 
        'Ixus970/IMG_0136.JPG', 'Ixus970/IMG_0137.JPG', 'Ixus970/IMG_0156.JPG', 
        'Ixus970/IMG_0162.JPG', 'Ixus970/IMG_0172.JPG', 'Ixus970/IMG_0173.JPG', 
        'Ixus970/IMG_0179.JPG', 'Ixus970/IMG_0193.JPG', 'Ixus970/IMG_0219.JPG', 
        'Ixus970/IMG_0220.JPG', 'Ixus970/IMG_0235.JPG', 'Ixus970/IMG_0238.JPG', 
        'Ixus970/IMG_0252.JPG', 'Ixus970/IMG_0285.JPG', 'Ixus970/IMG_0286.JPG', 
        'Ixus970/IMG_0293.JPG', 'Ixus970/IMG_0322.JPG', 'Ixus970/IMG_0331.JPG', 
        'Ixus970/IMG_0355.JPG', 'Ixus970/IMG_0364.JPG', 'Ixus970/IMG_0412.JPG', 
        'Ixus970/IMG_0429.JPG', 'Ixus970/IMG_0452.JPG', 'Ixus970/IMG_0465.JPG', 
        'Ixus970/IMG_0478.JPG', 'Ixus970/IMG_0484.JPG', 'Ixus970/IMG_0526.JPG', 
        'Ixus970/IMG_0557.JPG', 'Ixus970/IMG_0563.JPG', 'Ixus970/IMG_0576.JPG', 
        'Ixus970/IMG_0577.JPG', 'Ixus970/IMG_2732.JPG', 'Ixus970/IMG_2744.JPG', 
        'Ixus970/IMG_2749.JPG', 'Ixus970/IMG_2767.JPG'
    ],
    Iphone16pro: [
        'Iphone16pro/File_002.png', 'Iphone16pro/File_008.png', 'Iphone16pro/File_010.png',
        'Iphone16pro/File_023.png', 'Iphone16pro/File_065.png', 'Iphone16pro/IMG_0368.png', 
        'Iphone16pro/IMG_0383.png', 'Iphone16pro/IMG_0384.png', 'Iphone16pro/IMG_0625.png', 
        'Iphone16pro/IMG_0705.png', 'Iphone16pro/IMG_0706.png', 'Iphone16pro/IMG_0734.png', 
        'Iphone16pro/IMG_1207.png', 'Iphone16pro/IMG_1233.png', 'Iphone16pro/IMG_1365.png', 
        'Iphone16pro/IMG_1548.png', 'Iphone16pro/IMG_1577.png', 'Iphone16pro/IMG_1735.png', 
        'Iphone16pro/IMG_1781.png', 'Iphone16pro/IMG_1840.png', 'Iphone16pro/IMG_1842.png', 
        'Iphone16pro/IMG_1895.png', 'Iphone16pro/IMG_1907.png', 'Iphone16pro/IMG_1909.png', 
        'Iphone16pro/IMG_1915.png', 'Iphone16pro/IMG_1942.png', 'Iphone16pro/IMG_2170.png', 
        'Iphone16pro/IMG_2295.png', 'Iphone16pro/IMG_2305.png', 'Iphone16pro/IMG_2348.png', 
        'Iphone16pro/IMG_2380.png', 'Iphone16pro/IMG_2392.png', 'Iphone16pro/IMG_2427.jpg', 
        'Iphone16pro/IMG_2466.jpg', 'Iphone16pro/IMG_2467.jpg', 'Iphone16pro/IMG_2478.png', 
        'Iphone16pro/IMG_2481.png', 'Iphone16pro/IMG_2483.png', 'Iphone16pro/IMG_2512.png', 
        'Iphone16pro/IMG_2517.png', 'Iphone16pro/IMG_2533.png', 'Iphone16pro/IMG_2563.png', 
        'Iphone16pro/IMG_2568.png', 'Iphone16pro/IMG_2575.png', 'Iphone16pro/IMG_2597.png', 
        'Iphone16pro/IMG_2598.png', 'Iphone16pro/IMG_2618.png', 'Iphone16pro/IMG_2695.png', 
        'Iphone16pro/IMG_2708.png', 'Iphone16pro/IMG_2739.png', 'Iphone16pro/IMG_2751.png', 
        'Iphone16pro/IMG_2761.png', 'Iphone16pro/IMG_2824.png', 'Iphone16pro/IMG_2834.png', 
        'Iphone16pro/IMG_2841.png', 'Iphone16pro/IMG_2908.png', 'Iphone16pro/IMG_2910.png', 
        'Iphone16pro/IMG_2915.png', 'Iphone16pro/IMG_2933.jpg', 'Iphone16pro/IMG_2948.png', 
        'Iphone16pro/IMG_2951.png', 'Iphone16pro/IMG_2963.jpg', 'Iphone16pro/IMG_3001.png', 
        'Iphone16pro/IMG_3020.png', 'Iphone16pro/IMG_3033.png', 'Iphone16pro/IMG_3040.png', 
        'Iphone16pro/IMG_3047.png', 'Iphone16pro/IMG_3072.png', 'Iphone16pro/IMG_3087.png', 
        'Iphone16pro/IMG_3109.png', 'Iphone16pro/IMG_3111.png', 'Iphone16pro/IMG_3115.jpg'
    ]
};

// --- Local Image Setup ---

function PhotoGallery({ folderName }) {
    // Get the list of image filenames for the current folder
    // Note: These paths must be relative to the index.html file
    const imagePaths = imageData[folderName] || [];

    // Function to get the correct relative path for the image
    const getImageUrl = (relativePath) => {
        // Assuming the paths in imageData are already correct relative paths
        return relativePath; 
    };

    // State to track which image is focused (if any)
    const [focusedImage, setFocusedImage] = React.useState(null);
    // Track mouse position for better positioning of the focused image
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    // State to track if we're closing (for animation)
    const [isClosing, setIsClosing] = React.useState(false);
    
    // Reference to the masonry grid
    const gridRef = React.useRef(null);

    // Handle image click
    const handleImageClick = (path, e) => {
        // Store mouse position for better positioning of the focused image
        if (e) {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
        
        if (focusedImage === path) {
            // If clicking the already focused image, start closing animation
            handleCloseImage();
        } else {
            // Focus on the clicked image
            setFocusedImage(path);
            setIsClosing(false);
        }
    };
    
    // Handle close with animation
    const handleCloseImage = () => {
        setIsClosing(true);
        // Wait for animation to complete before removing from DOM
        setTimeout(() => {
            setFocusedImage(null);
            setIsClosing(false);
        }, 400); // Match this to your CSS animation duration
    };
    
    // Calculate position for the focused image overlay
    const getFocusedImageStyle = () => {
        if (!focusedImage) return {};
        
        return {
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: 'auto',
            height: 'auto',
            zIndex: 1000,
            border: 'none',
            padding: 0,
            animation: isClosing ? 'zoomOut 0.4s forwards' : undefined
        };
    };

    return (
        <div className={`modal-content ${focusedImage ? 'gallery-has-focused' : ''}`} style={{border: "none", boxShadow: "none", background: "transparent", position: "relative"}}> 
            {/* Overlay for focused image */}
            {focusedImage && (
                <div 
                    className="focused-image-overlay"
                    onClick={handleCloseImage}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        animation: isClosing ? 'fadeIn 0.4s reverse forwards' : undefined
                    }}
                >
                    <img 
                        src={getImageUrl(focusedImage)}
                        alt={`Enlarged photo from ${folderName}`}
                        style={getFocusedImageStyle()}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
            
            <div className="masonry-grid" ref={gridRef} style={{border: "none", padding: 0, margin: 0, background: "transparent"}}>
                {imagePaths.length > 0 ? (
                    imagePaths.map(path => (
                        <div 
                            className="gallery-image-wrapper"
                            key={path}
                            onClick={(e) => handleImageClick(path, e)}
                            style={{
                                border: "none", 
                                borderRadius: "10px", 
                                margin: 0, 
                                padding: 0, 
                                overflow: "hidden",
                                background: "transparent"
                            }}
                        >
                            <img 
                                src={getImageUrl(path)} 
                                alt={`Photo from ${folderName}`}
                                className="gallery-image" 
                                style={{
                                    border: "none", 
                                    borderRadius: "10px", 
                                    margin: 0, 
                                    width: "100%",
                                    background: "transparent"
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <p>No images found for this category (Check imageData in PhotoGallery.js).</p>
                )}
            </div>
        </div>
    );
}
