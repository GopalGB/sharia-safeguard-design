
import React, { useState, useRef } from 'react';
import { Upload, FileType, X, Check, ArrowLeft, Info } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DocumentUploadForm {
  documentTitle: string;
  overrideTitle: boolean;
  documentCategory: string;
  confidentialityLevel: string;
  notes: string;
  runOcr: boolean;
  performNer: boolean;
  enableClauseDetection: boolean;
  applyComplianceRules: boolean;
  languageDetection: 'auto' | 'arabic' | 'english' | 'mixed';
  enableBilingual: boolean;
  legalConsent: boolean;
}

interface RecentUpload {
  id: string;
  filename: string;
  date: string;
  size: string;
  status: 'Processed' | 'Uploaded' | 'Analyzing' | 'Failed';
}

const UploadDocument = () => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const recentUploads: RecentUpload[] = [
    {
      id: '1',
      filename: 'test_murabaha.txt',
      date: '2025-05-07 02:26',
      size: '1.0 kB',
      status: 'Processed'
    },
    {
      id: '2',
      filename: '1.__Lang-AR-01__-_Standard_Arabic_Contract__Clean_PDF_.pdf',
      date: '2025-05-06 14:57',
      size: '34.0 kB',
      status: 'Uploaded'
    },
    {
      id: '3',
      filename: '1.__Lang-AR-01__-_Standard_Arabic_Contract__Clean_PDF_.pdf',
      date: '2025-05-06 14:45',
      size: '34.0 kB',
      status: 'Uploaded'
    },
    {
      id: '4',
      filename: 'murabaha_example_ar.txt',
      date: '2025-05-06 05:37',
      size: '315 Bytes',
      status: 'Processed'
    },
    {
      id: '5',
      filename: 'murabaha_example_ar.txt',
      date: '2025-05-05 18:36',
      size: '315 Bytes',
      status: 'Processed'
    }
  ];

  const form = useForm<DocumentUploadForm>({
    defaultValues: {
      documentTitle: '',
      overrideTitle: false,
      documentCategory: '',
      confidentialityLevel: '',
      notes: '',
      runOcr: false,
      performNer: false,
      enableClauseDetection: false,
      applyComplianceRules: false,
      languageDetection: 'auto',
      enableBilingual: false,
      legalConsent: false,
    },
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    // For simplicity, just take the first file
    const newFile = fileList[0];
    setFiles([newFile]);
    
    // Auto-populate title with filename
    if (newFile && !form.getValues().overrideTitle) {
      const filename = newFile.name.substring(0, newFile.name.lastIndexOf('.')) || newFile.name;
      form.setValue('documentTitle', filename);
    }
  };

  const removeFile = () => {
    setFiles([]);
    if (!form.getValues().overrideTitle) {
      form.setValue('documentTitle', '');
    }
  };
  
  const handleSubmit = form.handleSubmit((data) => {
    if (files.length === 0) {
      toast({
        title: "No document selected",
        description: "Please select a document to upload",
        variant: "destructive",
      });
      return;
    }
    
    if (!data.legalConsent) {
      toast({
        title: "Legal consent required",
        description: "Please confirm you have the right to upload this document",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, you would handle file uploads here
    toast({
      title: "Document queued for upload",
      description: `${files[0].name} will be processed according to selected options`,
    });
    
    console.log("Form data:", data);
    console.log("Files:", files);
    
    // Reset form and files
    form.reset();
    setFiles([]);
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Uploaded':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Analyzing':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Failed':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-10">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">Upload Document</h1>
              <p className="text-deepCharcoal/70 mb-8">Upload and analyze your legal documents with UAE compliance</p>
              
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <Link 
                    to="/documents" 
                    className="flex items-center text-navyTrust hover:text-mutedTeal transition-colors"
                  >
                    <Button variant="outline" size="sm" className="gap-1">
                      <ArrowLeft className="h-4 w-4" />
                      View Documents
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="px-3 py-1.5 bg-lightSand rounded-md border border-gray-200 flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                          <span className="text-xs font-medium text-navyTrust">UAE-Hosted</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Data stored in UAE region (me-central-1)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="px-3 py-1.5 bg-lightSand rounded-md border border-gray-200 flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                          <span className="text-xs font-medium text-navyTrust">PDPL-Aligned</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Compliant with UAE Personal Data Protection Law</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="px-3 py-1.5 bg-lightSand rounded-md border border-gray-200 flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                          <span className="text-xs font-medium text-navyTrust">Secure Processing</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">All documents processed in the UAE</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Upload and Information */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Document Upload */}
                    <Card className="overflow-hidden border-border shadow-md">
                      <CardHeader className="bg-gradient-to-r from-navyTrust to-navyTrust/90 text-white">
                        <CardTitle>Document Upload</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div 
                          className={`border-2 border-dashed rounded-lg p-8 text-center ${
                            dragActive 
                              ? 'border-mutedTeal bg-mutedTeal/5' 
                              : files.length ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-mutedTeal hover:bg-gray-50'
                          } transition-all duration-200`}
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                        >
                          {files.length > 0 ? (
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <FileType className="h-16 w-16 text-navyTrust opacity-80" />
                              <div className="text-xl font-medium text-navyTrust">
                                {files[0].name}
                              </div>
                              <p className="text-sm text-deepCharcoal/60">
                                {(files[0].size / 1024).toFixed(1)} KB • Ready for upload
                              </p>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={removeFile}
                                type="button"
                                className="mt-2 text-red-600 hover:bg-red-50 border-red-200"
                              >
                                <X className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <Upload className="h-16 w-16 text-mutedTeal opacity-60" />
                              <div className="text-xl font-medium text-navyTrust">
                                Drag & drop your document here
                              </div>
                              <p className="text-sm text-deepCharcoal/60">
                                or
                              </p>
                              <input
                                id="file-upload"
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                                accept=".pdf,.docx,.png,.jpeg,.jpg"
                              />
                              <Button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-mutedTeal hover:bg-mutedTeal/90 text-white"
                              >
                                Browse Files
                              </Button>
                              <div className="text-xs text-deepCharcoal/60 mt-2">
                                <p className="mb-1">Supported formats:</p>
                                <div className="flex justify-center gap-2">
                                  <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">PDF</span>
                                  <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">DOCX</span>
                                  <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">PNG</span>
                                  <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">JPEG</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Document Information */}
                    <Card className="overflow-hidden border-border shadow-md">
                      <CardHeader className="bg-gradient-to-r from-navyTrust to-navyTrust/90 text-white">
                        <CardTitle>Document Information</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <FormLabel htmlFor="documentTitle">Document Title (Optional)</FormLabel>
                            <div className="flex items-center">
                              <FormField
                                control={form.control}
                                name="overrideTitle"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox 
                                        checked={field.value} 
                                        onCheckedChange={field.onChange} 
                                        className="text-mutedTeal border-mutedTeal data-[state=checked]:bg-mutedTeal data-[state=checked]:text-primary-foreground"
                                      />
                                    </FormControl>
                                    <label className="text-sm text-muted-foreground cursor-pointer" onClick={() => form.setValue('overrideTitle', !form.getValues().overrideTitle)}>
                                      Override document title
                                    </label>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <FormField
                            control={form.control}
                            name="documentTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Provide a title if you want to override the filename" {...field} className="border-gray-300 focus:border-mutedTeal focus:ring-mutedTeal" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="documentCategory"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Document Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:ring-mutedTeal">
                                      <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="contract">Contract</SelectItem>
                                    <SelectItem value="agreement">Agreement</SelectItem>
                                    <SelectItem value="legal">Legal Document</SelectItem>
                                    <SelectItem value="regulatory">Regulatory Filing</SelectItem>
                                    <SelectItem value="certificate">Certificate</SelectItem>
                                    <SelectItem value="identification">Identification</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="confidentialityLevel"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Confidentiality Level</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:ring-mutedTeal">
                                      <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="public">Public</SelectItem>
                                    <SelectItem value="internal">Internal</SelectItem>
                                    <SelectItem value="confidential">Confidential</SelectItem>
                                    <SelectItem value="restricted">Restricted</SelectItem>
                                    <SelectItem value="personal">Personal Data</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Notes (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Add any notes about this document..." 
                                  className="min-h-[80px] border-gray-300 focus:border-mutedTeal focus:ring-mutedTeal"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    {/* AI Analysis Options */}
                    <Card className="overflow-hidden border-border shadow-md">
                      <CardHeader className="bg-gradient-to-r from-navyTrust to-navyTrust/90 text-white">
                        <CardTitle>AI Analysis Options</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="runOcr"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-gray-50">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="text-mutedTeal border-mutedTeal data-[state=checked]:bg-mutedTeal data-[state=checked]:text-primary-foreground"
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>Run OCR (for scans/images)</FormLabel>
                                  <FormDescription>
                                    Extract text from images and scanned documents
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="performNer"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-gray-50">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="text-mutedTeal border-mutedTeal data-[state=checked]:bg-mutedTeal data-[state=checked]:text-primary-foreground"
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>Perform Entity Recognition (NER)</FormLabel>
                                  <FormDescription>
                                    Identify names, dates, organizations, and other entities
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="enableClauseDetection"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-gray-50">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="text-mutedTeal border-mutedTeal data-[state=checked]:bg-mutedTeal data-[state=checked]:text-primary-foreground"
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>Enable Clause Detection</FormLabel>
                                  <FormDescription>
                                    Identify key contract clauses and legal provisions
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="applyComplianceRules"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-gray-50">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="text-mutedTeal border-mutedTeal data-[state=checked]:bg-mutedTeal data-[state=checked]:text-primary-foreground"
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>Apply Compliance Rules (PDPL / DIFC)</FormLabel>
                                  <FormDescription>
                                    Check document against UAE legal requirements
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div>
                          <h3 className="text-sm font-medium mb-3">Multilingual Support</h3>
                          <FormField
                            control={form.control}
                            name="languageDetection"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Language Detection Override</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:ring-mutedTeal">
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="auto">
                                      Auto-detect
                                    </SelectItem>
                                    <SelectItem value="arabic">
                                      <span className="flex items-center gap-2">
                                        <span>🇦🇪</span> Arabic
                                      </span>
                                    </SelectItem>
                                    <SelectItem value="english">
                                      <span className="flex items-center gap-2">
                                        <span>🇬🇧</span> English
                                      </span>
                                    </SelectItem>
                                    <SelectItem value="mixed">
                                      <span className="flex items-center gap-2">
                                        <span>🔄</span> Mixed
                                      </span>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  By default, document language is automatically detected
                                </FormDescription>
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-4">
                            <FormField
                              control={form.control}
                              name="enableBilingual"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                      className="text-mutedTeal border-mutedTeal data-[state=checked]:bg-mutedTeal data-[state=checked]:text-primary-foreground"
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel>Enable bilingual extraction (Arabic ↔ English)</FormLabel>
                                    <FormDescription>
                                      Process documents containing both Arabic and English text
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Right Column - Legal Info */}
                  <div className="space-y-8">
                    {/* Legal Acknowledgement */}
                    <Card className="overflow-hidden border-border shadow-md">
                      <CardHeader className="bg-gradient-to-r from-navyTrust to-navyTrust/90 text-white">
                        <CardTitle>Legal Acknowledgement</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-navyTrust mb-2">UAE PDPL Compliance</h4>
                          <p className="text-sm text-gray-600">
                            Your document will be processed in accordance with the UAE Personal Data Protection Law (Federal Decree Law No. 45 of 2021)
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-navyTrust mb-2">UAE Data Residency</h4>
                          <p className="text-sm text-gray-600">
                            All processing and storage will occur exclusively in the UAE region (me-central-1)
                          </p>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <FormField
                          control={form.control}
                          name="legalConsent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="text-navyTrust border-navyTrust data-[state=checked]:bg-navyTrust data-[state=checked]:text-primary-foreground"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm text-gray-700">
                                  I confirm I have the right to upload this document and consent to its analysis in accordance with UAE PDPL.
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                      <CardFooter className="flex justify-between border-t bg-gray-50/50 p-4">
                        <Button variant="outline" type="button" asChild>
                          <Link to="/documents">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Documents
                          </Link>
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white hover:opacity-90"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Document
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    {/* Recent Uploads */}
                    <Card className="overflow-hidden border-border shadow-md">
                      <CardHeader className="bg-gradient-to-r from-navyTrust to-navyTrust/90 text-white flex flex-row items-center justify-between">
                        <CardTitle>Recent Uploads</CardTitle>
                        <Button variant="link" size="sm" asChild className="text-white hover:text-white/90 p-0">
                          <Link to="/documents">View All</Link>
                        </Button>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="max-h-[280px] overflow-y-auto pr-2">
                          <Table>
                            <TableBody>
                              {recentUploads.map((upload) => (
                                <TableRow key={upload.id}>
                                  <TableCell className="py-2">
                                    <div className="flex flex-col">
                                      <span className="font-medium text-sm text-navyTrust truncate max-w-[180px]" title={upload.filename}>
                                        {upload.filename}
                                      </span>
                                      <span className="text-xs text-gray-500">{upload.date}</span>
                                      <span className="text-xs text-gray-500">{upload.size}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell className="py-2 text-right">
                                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(upload.status)}`}>
                                      {upload.status}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Security Info */}
                    <Card className="overflow-hidden border-border shadow-md">
                      <CardHeader className="bg-gradient-to-r from-navyTrust to-navyTrust/90 text-white">
                        <CardTitle className="flex items-center gap-2">
                          <span>🔒</span> Security & Compliance Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-navyTrust mb-2">UAE PDPL Compliance</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            All documents are processed in compliance with the UAE Personal Data Protection Law (Federal Decree Law No. 45 of 2021).
                          </p>
                          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                            <li>Document storage occurs exclusively in UAE data centers</li>
                            <li>All processing is performed within UAE territory</li>
                            <li>Data sovereignty is maintained at all times</li>
                            <li>No data is transferred outside the UAE without explicit consent</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-navyTrust mb-2">Data Security Measures</h4>
                          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                            <li>AES-256 encryption for document storage</li>
                            <li>TLS 1.3 for all data transmission</li>
                            <li>Complete audit logging of all document access</li>
                            <li>Role-based access controls for document viewing</li>
                            <li>Automatic document classification and handling</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default UploadDocument;
