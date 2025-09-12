# TwinVision Frontend

A modern Angular frontend application for digital twin management and monitoring, featuring advanced data visualization and real-time analytics.

## 🚀 Features

### Core Functionality
- **Digital Twins Management**: Complete CRUD operations for projects, entities, and metrics
- **Advanced Data Visualization**: Interactive charts, time series analysis, and real-time metrics
- **Component Management**: Model creation and management system
- **Alarm System**: Thresholds, predictive models, and generative AI integration
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Data Visualization Components
- **Time Series Charts**: Real-time data visualization with Chart.js integration
- **Big Numbers Dashboard**: Key performance indicators with trend analysis
- **Advanced Charts**: Bar charts, line charts, and radar charts
- **Data Tables**: Sortable, searchable, and paginated data tables
- **Metric Cards**: Interactive metric displays with status indicators

### UI/UX Features
- **Dark Theme**: Modern dark mode interface matching the design specifications
- **Material Design**: Angular Material components with custom theming
- **Responsive Layout**: Adaptive design for desktop, tablet, and mobile devices
- **Interactive Navigation**: Sidebar navigation with active state management
- **Floating Action Buttons**: Quick access to primary actions

## 🛠️ Technology Stack

- **Framework**: Angular 17
- **UI Library**: Angular Material 17
- **Charts**: Chart.js with ng2-charts
- **Styling**: SCSS with CSS custom properties
- **Icons**: Material Icons
- **Typography**: Inter font family
- **State Management**: RxJS observables and services

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                    # Core application components
│   │   ├── layout/             # Main layout component
│   │   ├── sidebar/            # Navigation sidebar
│   │   └── header/             # Application header
│   ├── shared/                 # Shared components and modules
│   │   └── data-visualization/ # Reusable chart and visualization components
│   ├── modules/                # Feature modules
│   │   ├── digital-twins/      # Digital twins management
│   │   ├── components/         # Component management
│   │   └── alarms/            # Alarm and monitoring system
│   ├── app.component.ts        # Root component
│   ├── app.module.ts          # Root module
│   └── app-routing.module.ts  # Application routing
├── assets/                     # Static assets
└── styles.scss                # Global styles and theme
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2196f3)
- **Accent**: Purple (#9c27b0)
- **Success**: Green (#4caf50)
- **Warning**: Orange (#ff9800)
- **Error**: Red (#f44336)
- **Background**: Dark grays (#1a1a1a, #2d2d2d, #3a3a3a)
- **Text**: White and light grays (#ffffff, #b3b3b3, #808080)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling from 12px to 32px

### Components
- **Cards**: Rounded corners (12px), subtle shadows, hover effects
- **Buttons**: Rounded corners (8px), smooth transitions
- **Tables**: Clean borders, hover states, sortable headers
- **Charts**: Dark theme integration, custom color schemes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (v17 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd twinvision-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Collapsible sidebar navigation
- Touch-friendly button sizes
- Optimized chart dimensions
- Simplified layouts for small screens

## 🎯 Key Features Implementation

### 1. Digital Twins Module
- **Projects**: List view with status indicators and search functionality
- **Entities**: Empty state with creation workflow
- **Metrics**: Advanced dashboard with time series charts and big numbers

### 2. Components Module
- **Models**: Data table with sorting and pagination
- **Purple accent theme** for visual distinction

### 3. Alarms Module
- **Thresholds**: Threshold management with data tables
- **Predictive Models**: AI/ML model management interface
- **Generative AI**: Advanced AI model creation and monitoring

### 4. Data Visualization
- **Time Series Charts**: Real-time data with bell curve patterns
- **Big Numbers**: KPI cards with trend indicators
- **Advanced Charts**: Multiple chart types with dark theme
- **Interactive Tables**: Sortable, searchable data grids

## 🔧 Customization

### Theme Customization
Modify the color scheme in `src/styles.scss`:

```scss
:root {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --accent-blue: #2196f3;
  --accent-purple: #9c27b0;
  // ... other variables
}
```

### Component Styling
Each component has its own SCSS file for isolated styling. Global styles are defined in `src/styles.scss`.

## 🧪 Testing

Run unit tests:
```bash
ng test
```

Run end-to-end tests:
```bash
ng e2e
```

## 📦 Build and Deployment

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

### Docker Support
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🔮 Future Enhancements

- Real-time WebSocket integration
- Advanced filtering and search
- Export functionality for charts and data
- User authentication and authorization
- Multi-language support
- Advanced analytics and reporting
- Integration with external APIs
- Progressive Web App (PWA) features

---

**TwinVision Frontend** - Empowering digital twin management with modern web technologies.
