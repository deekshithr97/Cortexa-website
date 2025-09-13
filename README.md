## Hotel Operations Dashboard

### Overview

This project is a React-based dashboard for hotel operations, featuring components for guest reviews, competitive ratings, and team usage analytics. The dashboard leverages reusable cards and custom icons to visualize operational metrics, aiming to help hoteliers optimize performance with AI-driven insights.[2][3][4][5][6][1]

### Features

- **ReviewSummaryCard:** Displays summarized guest review data.
- **CompetitiveRatingsCard:** Visualizes competitive analytics using stylized bar charts.
- **TeamUsageCard:** Shows staff usage metrics with circular progress visualization.
- **StarIcon:** Custom SVG icon component for ratings.
- **Hero Section:** Landing page promotion for the Cortexa platform, integrating all metric cards.
- **Reusable and Modular Components:** Easy to extend or modify for additional cards/metrics.

### File Structure

| File Name                 | Description                                            |
|---------------------------|-------------------------------------------------------|
| `Header.tsx`              | Header/navigation bar component [1]     |
| `StarIcon.tsx`            | SVG Render for star icons [2]           |
| `TeamUsageCard.tsx`       | Circular progress/status indicator [3]  |
| `CompetitiveRatingsCard.tsx` | Competitive bar chart component [4]  |
| `ReviewSummaryCard.tsx`   | Summary card for reviews [5]            |
| `Hero.tsx`                | Main landing dashboard section [6]      |

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/hotel-dashboard.git
   cd hotel-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```

### Usage

- Import and use the dashboard components in your app entry point.
- Example integration (inside `Hero.tsx`):
  ```tsx
  import ReviewSummaryCard from './charts/ReviewSummaryCard';
  import CompetitiveRatingsCard from './charts/CompetitiveRatingsCard';
  import TeamUsageCard from './charts/TeamUsageCard';

  // Use inside a JSX container
  ```

### Customization

- To add new metric cards, create a new component in the `/charts` folder and update `Hero.tsx` for integration.
- Update styles or add Tailwind utility classes as desired for branding.

### Dependencies

- **React 18+**
- **TypeScript**
- **Tailwind CSS** (for utility-first styling)
- Additional dependencies may be listed in `package.json`.

### Contributing

- Fork the repo and create pull requests for new features or fixes.
- Please maintain code style and run `npm run lint` before submitting changes.
