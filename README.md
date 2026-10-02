# Accumulators Trading Platform

A Next.js-based trading platform for accumulator contracts with real-time charts and position management.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Features

- Real-time accumulator charts
- Position management
- Multi-language support (i18n)
- Dark/light theme toggle
- Responsive design
- WebSocket integration

## Project Structure

```
.
├── app/              # Next.js app directory
├── components/       # React components
│   ├── custom/      # Custom components
│   └── ui/          # UI components (Shadcn/ui)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and configuration
│   └── i18n/        # Internationalization
├── public/          # Static assets
└── packages/        # Core library packages
```

## Technologies

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Charts**: SmartCharts
- **State Management**: Zustand
- **Internationalization**: i18next
- **Toast Notifications**: Sonner

## License

MIT
