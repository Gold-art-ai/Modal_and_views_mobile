# ModalAndViews

A standalone **React Native / Expo** demo showcasing `View`, `Image`, and `Modal` — built as a plain, unstyled reference sheet.

## Components Demonstrated

| Component | Usage |
|---|---|
| `View` | Card layouts, nested view demo, modal container |
| `Image` | Remote URL images inside cards and inside a Modal |
| `Modal` | Full-screen overlay that shows a large image + details |
| `Button` | Triggers to open / close the Modal |
| `SafeAreaView` + `ScrollView` | Page shell |

## Screens

- **Section 1** — Four cake image cards; each card is a `<View>` containing an `<Image>` and a Button that opens a `<Modal>` with a larger image.
- **Section 2** — Nested `<View>` demo with coloured borders to visualise layout nesting.

## Getting Started

```bash
npm install
npx expo start
```

Open in Expo Go or a development build.

## Structure

```
ModalAndViews/
├── src/
│   └── app/
│       ├── _layout.tsx   # Expo Router root layout
│       └── index.tsx     # Main screen
├── app.json
├── package.json
└── tsconfig.json
```
