﻿using System;
using Oem.Data.Enum;
using Oem.Models.Service;
using Oem.Services.IServices.Home;

namespace Oem.Services.Services.Home
{
    public class HomeService : IHomeService
    {
        /// <summary>
        /// 获取页面时间和本地时间差
        /// </summary>
        /// <param name="clientTime">页面时间</param>
        /// <returns>时间差值</returns>
        public ServiceResult<ServiceStateEnum, long> GetTimeDvalue(long clientTime)
        {
            long serviceTime = (DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 100000;
            return ServiceResult.Create(ServiceStateEnum.Success, serviceTime - clientTime - 500);
        }
    }
}
