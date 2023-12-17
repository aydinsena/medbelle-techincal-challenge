This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

This app is created with Node Version 20.8.0.

First, isnstall necessary dependencies:

- **`npm install`**

After installation, you can run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Structure Overview

My Next.js application's structure includes:

- `characters/page.tsx`: Server-side component for character handling.
- `characters/[characterId]/page.tsx`: Server-side component for specific character handling.

- `_components/`: Directory with various components like: `CharactersClient`, `CharacterDetails`, `CharactersList`, `Pagination`.

## Dependencies

### Main Dependencies

- **Next.js**: Version 14.0.4
- **React** and **React DOM**: Versions ^18

### Development Dependencies

- **@types/node**: Version ^20
- **@types/react** and **@types/react-dom**: Version ^18
- **autoprefixer**: Version ^10.0.1
- **babel-jest**: Version ^29.7.0
- **eslint**: Version ^8
- **eslint-config-next**: Version 14.0.4
- **jest**: Version ^29.7.0
- **postcss**: Version ^8
- **tailwindcss**: Version ^3.3.0
- **typescript**: Version ^5

## Components Overview

1. **`characters/page.tsx`**:

   - Server-side component fetching all characters and rendering the `CharactersClient` component.

2. **`characters/[characterID]/page.tsx`**:

- Server-side component fetching a specific character's data using an API call based on the provided characterID, then renders the `CharacterDetails` component with that fetched character's information.

3. **`_components/CharactersClient.tsx`**:

   - Client-side rendering of characters.
   - Implements search, pagination, and displays character lists based on search results.

4. **`_components/CharacterDetails.tsx`**:

   - Displays detailed information about a character.
   - Renders character image, name, birth year, eye color, gender, hair color, height, mass, and skin color.

5. **`_components/Pagination.tsx`**:

   - Renders pagination UI based on total items and items per page.

6. **`_components/CharactersList.tsx`**:
   - Displays a list of characters with basic information and links to individual character details.
