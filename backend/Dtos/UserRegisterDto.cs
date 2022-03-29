﻿using backend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace backend.Dtos
{
    public class UserRegisterDto
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public DateTime Birthday { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public AccountType AccountType { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password", ErrorMessage = "Password and Confirmation Password must match.")]
        public string ConfirmationPassword { get; set; }
        public UserStatus Status { get; set; }
    }
}