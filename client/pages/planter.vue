<template>
  <div>
    <StepSection :count=1 title="Shopping" :is-ready="shoppingReady">
      <ShoppingStep />
    </StepSection>

    <StepSection :count=2 title="Lokasion" :is-ready="locationReady">
      <LocationStep />
    </StepSection>

    <StepSection :count=3 title="Aste" :is-ready="buyReady">
      <BuyStep />
    </StepSection>
  </div>
</template>
