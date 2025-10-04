# WeatherNow - React Weather Application

A beautiful, responsive weather application built with React.js and TypeScript that provides real-time weather information and 5-day forecasts for cities worldwide using the OpenWeatherMap API.

![WeatherNow Screenshot](https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: Detailed weather predictions with daily highs and lows
- **Beautiful UI**: Clean, modern design with smooth animations and transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smart Search**: Intelligent city search with error handling and suggestions
- **Local Storage**: Remembers your last searched city for convenience
- **Loading States**: Elegant loading animations and error messages
- **Weather Icons**: Dynamic weather icons from OpenWeatherMap
- **Detailed Metrics**: Temperature, humidity, pressure, visibility, and wind speed

## 🚀 Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: OpenWeatherMap API
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser localStorage

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weathernow.git
cd weathernow
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API keys section
4. Generate a new API key (it may take a few minutes to activate)

### 4. Environment Configuration

Create a `.env` file in the root directory and add your API key:

```env
VITE_API_KEY=your_openweathermap_api_key_here
```

**Important**: Replace `your_openweathermap_api_key_here` with your actual API key from OpenWeatherMap.

### 5. Start the Development Server

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

## 📁 Project Structure

```
weathernow/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── WeatherDisplay.tsx
│   │   ├── ForecastDisplay.tsx
│   │   ├── Loader.tsx
│   │   └── ErrorMessage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── README.md
```

## 🎯 Usage

1. **Search for a City**: Enter any city name in the search bar and press Enter or click the Search button
2. **View Current Weather**: See detailed current weather information including temperature, humidity, and conditions
3. **Check Forecast**: Scroll down to view the 5-day weather forecast
4. **Automatic Save**: Your last searched city is automatically saved and loaded when you return

### Example Searches
- `London`
- `New York`
- `Tokyo`
- `Mumbai`
- `Paris, France`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🌐 API Endpoints Used

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue gradient backgrounds
- **Card-based Layout**: Clean cards with shadows and rounded corners
- **Hover Effects**: Interactive elements with smooth hover transitions
- **Loading Animations**: Spinning loader with descriptive text
- **Error Handling**: User-friendly error messages with helpful tips
- **Responsive Grid**: Adapts to different screen sizes seamlessly

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_KEY` | Your OpenWeatherMap API key | Yes |

## 🚨 Troubleshooting

### Common Issues

1. **"API key not configured" Error**
   - Make sure you've created a `.env` file in the root directory
   - Verify your API key is correctly added to the `.env` file
   - Restart the development server after adding the API key

2. **"City not found" Error**
   - Check the spelling of the city name
   - Try adding the country name (e.g., "London, UK")
   - Some cities may have alternative spellings

3. **API Key Not Working**
   - New API keys can take up to 10 minutes to activate
   - Verify you're using the correct API key from your OpenWeatherMap account
   - Check if you've exceeded the free tier limits (1000 calls/day)

### Development Issues

1. **Port Already in Use**
   ```bash
   # Kill the process using port 5173
   npx kill-port 5173
   # Or use a different port
   npm run dev -- --port 3000
   ```

2. **Module Not Found Errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the amazing frontend library

## 📞 Support

If you have any questions or run into issues, please:

1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information about your problem

---

**Made with ❤️ using React and TypeScript**