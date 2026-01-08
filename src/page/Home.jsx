import React from 'react'
import CategoryNav from '../componets/CategoryNav'
import HeroSlider from '../componets/HeroSlider'
import EverydayEssentialsSlider from '../componets/EverydayEssentialsSlider'
import AllRoundWellness from '../componets/AllRoundWellness'
import TopSellingProducts from '../componets/TopSellingProducts'
import PetTraining from '../componets/PetTraining'
import NewArrivals from '../componets/NewArrivals'
import AboutFurrmaa from '../componets/AboutFurrmaa'
import FurmaaPetAIChat from '../componets/FurmaaPetAIChat'
import BestDeals from '../componets/BestDeals'
import TrendingPetFeed from '../componets/TrendingPetFeed'
import CustomerFeedback from '../componets/CustomerFeedback'
import PetChooseFurmaa from '../componets/PetChooseFurmaa'
import DownloadAppSection from '../componets/DownloadAppSection'
import FAQSection from '../componets/FAQSection'
import CareBanner from '../componets/CareBanner'

export default function Home() {
  return (
    <>
    <CategoryNav/>
    <HeroSlider/>
    <EverydayEssentialsSlider/>
    <AllRoundWellness/>
    <CareBanner/>
    <TopSellingProducts/>
    <PetTraining/>
    <NewArrivals/>
    <AboutFurrmaa/>
    <FurmaaPetAIChat/>
    <BestDeals/>
    <TrendingPetFeed/>
    <CustomerFeedback/>
    <PetChooseFurmaa/>
    <DownloadAppSection/>
    <FAQSection/>

    
    </>
  )
}
