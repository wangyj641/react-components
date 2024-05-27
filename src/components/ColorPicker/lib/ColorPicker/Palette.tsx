import type { FC } from 'react';
import { Color } from './color';
import Handler from './Handler';

const Palette: FC<{
  color: Color
}> = ({ color }) => {
  return (
    <div className="color-picker-panel-palette" >
      <Handler color={color.toRgbString()} />

      <div
        className="color-picker-panel-palette-main"
        style={{
          backgroundColor: `hsl(${color.toHsl().h},100%, 50%)`,
          backgroundImage:
            'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
        }}
      />
    </div>
  );
};

export default Palette;
