import * as React from "react";
import { SVGAttributes } from "react";

export const MastercardIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <path
          d="M17.055 17.985c-1.2 0-2.118.385-2.118.385l-.254 1.508s.758-.309 1.906-.309c.651 0 1.127.073 1.127.602 0 .322-.058.44-.058.44s-.513-.041-.75-.041c-1.514 0-3.102.643-3.102 2.591 0 1.535 1.041 1.885 1.688 1.885 1.234 0 1.767-.8 1.794-.802l-.058.668h1.54l.687-4.816c-.001-2.045-1.784-2.11-2.402-2.11zm-.864 5.596c-.543 0-.684-.414-.684-.661 0-.478.26-1.054 1.54-1.054.3.001.332.032.381.04.034.296-.183 1.675-1.237 1.675zm6.425-3.981c.246 0 1.195.079 1.195.079l.22-1.543s-.614-.138-1.613-.138c-1.294 0-2.606.517-2.606 2.284 0 2.003 2.189 1.8 2.189 2.645 0 .561-.612.608-1.083.608-.817 0-1.552-.279-1.554-.268l-.233 1.531c.042.012.495.213 1.962.213.393 0 2.645.102 2.645-2.222 0-2.173-2.084-1.744-2.084-2.617 0-.435.339-.571.962-.571zm3.679.197h.926l.223-1.645h-.872l.177-1.02h-1.748c-.039.037-1.032 5.752-1.032 6.445 0 1.033.579 1.49 1.393 1.482.638-.004 1.136-.18 1.312-.23l.218-1.486c-.12 0-.296.052-.45.052-.61 0-.676-.325-.638-.564l.491-3.034zm7.33-9.545h-3.121c-.42.567-.814 1.17-1.17 1.759H34.9a16.639 16.639 0 00-1.276-1.759zm24.348 19.783a.891.891 0 00-.085-.114.121.121 0 00-.05-.03.178.178 0 00.12-.051.152.152 0 00.018-.193.137.137 0 00-.072-.056.432.432 0 00-.144-.017h-.198v.573h.093v-.243h.054c.031 0 .057.007.072.02.024.02.058.064.098.133l.05.09h.114l-.07-.112zm-.207-.207h-.113v-.172h.107c.044 0 .073.003.09.01.018.007.03.017.04.03a.077.077 0 01.014.044.08.08 0 01-.029.064c-.02.015-.056.024-.109.024zm-21.92-16.092h-7.487c-.478.905-.795 1.59-.885 1.76h9.081a16.41 16.41 0 00-.709-1.76zm-24.182 2.857l-1.724 5.11-.09-5.11H7.3l-1.4 8.328h1.688l1.064-6.278.156 6.277h1.204l2.247-6.277-.995 6.277h1.79l1.379-8.327h-2.77zm33.74 1.392c-1.2 0-2.119.385-2.119.385l-.255 1.508s.76-.309 1.906-.309c.652 0 1.129.073 1.129.602 0 .322-.06.44-.06.44s-.512-.041-.753-.041c-1.511 0-3.099.643-3.099 2.591 0 1.535 1.043 1.885 1.689 1.885 1.232 0 1.765-.8 1.793-.802l-.057.668h1.538l.687-4.816c.004-2.045-1.78-2.11-2.399-2.11zm-.861 5.596c-.544 0-.684-.414-.684-.661 0-.478.26-1.054 1.54-1.054.299.001.33.032.381.04.033.296-.186 1.675-1.237 1.675zm13.485.572a.478.478 0 00-.2-.197.527.527 0 00-.719.197.524.524 0 000 .528c.047.084.113.15.196.198a.533.533 0 00.723-.726zm-.073.484a.449.449 0 01-.383.224.446.446 0 01-.445-.444c0-.076.02-.15.062-.221a.442.442 0 01.766.44z"
          fill="#8F8F8F"
        />
        <path
          d="M57.748 24.599a.72.72 0 00-.084-.113.13.13 0 00-.049-.03.175.175 0 00.118-.052.148.148 0 00.018-.193.16.16 0 00-.07-.055.436.436 0 00-.145-.017h-.2v.571h.094v-.242h.053c.033 0 .059.006.075.019.023.02.055.063.097.135l.049.09h.114l-.07-.113zm-.204-.21h-.112v-.173h.104c.045 0 .075.003.093.009a.088.088 0 01.037.03.083.083 0 01-.012.109c-.022.02-.057.025-.11.025zm-6.198-6.321c-.783 0-1.364 1.069-1.364 1.069l.156-.983h-1.63l-1.09 6.779h1.794c.511-2.897.604-5.246 1.818-4.816.214-1.12.42-1.554.652-2.026 0 0-.108-.023-.336-.023zm4.51-1.466l-.377 2.34s-.657-.91-1.689-.91c-1.603.001-2.938 1.933-2.938 4.152 0 1.433.713 2.837 2.168 2.837 1.048 0 1.628-.73 1.628-.73l-.076.624h1.701l1.337-8.316-1.754.003zm-2.218 6.72c-.63 0-.924-.528-.924-1.358 0-1.356.608-2.25 1.378-2.25.627 0 .95.433.95 1.45 0 .923-.456 2.157-1.404 2.157z"
          fill="#8F8F8F"
        />
        <path
          d="M62.352 0H1.648C.737 0 0 .738 0 1.648v38.18c0 .91.737 1.648 1.648 1.648h60.704c.912 0 1.648-.737 1.648-1.647V1.648C64 .738 63.264 0 62.352 0zm-4.098 30.118a.494.494 0 01-.196.198.538.538 0 01-.528 0 .532.532 0 01.002-.924.56.56 0 01.262-.067c.09 0 .175.023.26.068a.483.483 0 01.198.197.54.54 0 01.002.528zm1.187-9.38c.003 9.072-7.347 16.428-16.419 16.43a16.358 16.358 0 01-11.025-4.248 16.357 16.357 0 01-11.011 4.244c-9.067 0-16.425-7.358-16.425-16.425 0-9.031 7.3-16.367 16.32-16.426h.105a16.36 16.36 0 0111.012 4.243A16.366 16.366 0 0143.014 4.31c9.072-.003 16.427 7.35 16.43 16.422-.003.002-.003.003-.003.008z"
          fill="#8F8F8F"
        />
        <path
          d="M30.315 31.124a16.21 16.21 0 001.68 1.795c.013-.013.028-.024.041-.036h-.001.003a16.411 16.411 0 001.668-1.76h-3.391zm2.237-9.016s.23-1.133.23-1.594c0-1.152-.573-2.558-2.493-2.558-1.758.002-3.06 1.896-3.06 4.038 0 2.471 1.63 3.058 3.02 3.058 1.283 0 1.848-.288 1.848-.288l.308-1.686s-.976.43-1.857.43c-1.878 0-1.55-1.4-1.55-1.4h3.554zm-2.257-2.582c.987 0 .804 1.11.804 1.198h-1.94c0-.115.183-1.198 1.136-1.198zm10.458-1.338c.89 0 1.605.5 1.605.5l.286-1.852s-1.059-.429-1.97-.429c-2.018 0-3.982 1.752-3.982 5.041 0 2.182 1.06 3.622 3.147 3.622.59 0 1.53-.24 1.53-.24l.312-1.907s-.856.43-1.445.43c-1.242-.002-1.74-.95-1.74-1.965 0-2.065 1.068-3.2 2.257-3.2zm-12.63 9.485c.284.611.615 1.192.97 1.759h5.827c.354-.564.672-1.151.957-1.759h-7.754zm8.537-9.603c-.783 0-1.363 1.07-1.363 1.07l.158-.983h-1.629l-1.091 6.778h1.795c.509-2.895.604-5.245 1.817-4.816.213-1.12.419-1.555.65-2.028 0 0-.108-.023-.337-.02z"
          fill="#8F8F8F"
        />
      </svg>
    );
  }
);

MastercardIcon.displayName = "MastercardIcon";
