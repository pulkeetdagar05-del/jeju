import { ClickTimes } from '../Disp/VariablesAndData.js';
import { CMAvgQueue, InitCookiesDiff } from './CPS/AverageQueue.js';
import CacheAvgCPS from './CPS/CPS.js';
import CacheDragonAuras from './Dragon/CacheDragonAuras.js';
import CachePP from './PP/PP.js';
import { CacheBuildingsPrices, CacheIncome } from './PriceAndIncome/PriceAndIncome.js';
import { CacheChain } from './Stats/ChainCookies.js';
import CacheHeavenlyChipsPS from './Stats/HeavenlyChips.js';
import CacheAllMissingUpgrades from './Stats/MissingUpgrades.js';
import CacheSeasonSpec from './Stats/Reindeer.js';
import { CacheGoldenAndWrathCookiesMults, CacheStatsCookies } from './Stats/Stats.js';
import AllAmountTillNextAchievement from './TillNextAchievement/AllAmountTillNextAchievement.js';
import { CacheAverageCookiesFromClicks, HeavenlyChipsDiff } from './VariablesAndData.js'; // eslint-disable-line no-unused-vars
import CacheWrinklers from './Wrinklers/Wrinklers.js';

/**
 * This functions runs all cache-functions to generate all "full" cache
 */
export default function InitCache() {
  CacheDragonAuras();
  CacheWrinklers();
  CacheStatsCookies();
  CacheGoldenAndWrathCookiesMults();
  CacheChain();
  CacheAllMissingUpgrades();
  CacheSeasonSpec();
  InitCookiesDiff();
  /** Used by CM.Cache.CacheHeavenlyChipsPS() */
  HeavenlyChipsDiff = new CMAvgQueue(5);
  CacheAverageCookiesFromClicks = new CMAvgQueue(ClickTimes[ClickTimes.length - 1] * 20);
  CacheHeavenlyChipsPS();
  AllAmountTillNextAchievement();
  CacheAvgCPS();
  CacheIncome();
  CacheBuildingsPrices();
  CachePP();
}
